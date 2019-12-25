const fse = require('fs-extra')
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const exif = require('exif-reader')
const date = require('date-fns').format

const rawImgPath = path.resolve(__dirname, 'public/img/gallery/raw')
const fullImgPath = path.resolve(__dirname, 'public/img/gallery/full')
const thumbImgPath = path.resolve(__dirname, 'public/img/gallery/thumb')

let photosTemplate = fs.readFileSync(
  path.resolve(__dirname, 'photos.template'),
  'utf-8'
)

console.log('Cleaning existing files...')
fse.removeSync(fullImgPath)
fse.removeSync(thumbImgPath)

fse.ensureDirSync(rawImgPath)
fse.ensureDirSync(fullImgPath)
fse.ensureDirSync(thumbImgPath)

function gcd(a, b) {
  return b == 0 ? a : gcd(b, a % b)
}

const files = fs.readdirSync(rawImgPath)

const fileData = {
  full: [],
  thumb: [],
}

async function handleFiles() {
  console.log('Procesing files...')
  await Promise.all(
    files.map(async (file, index) => {
      const sharpFileInstance = sharp(
        fs.readFileSync(path.resolve(rawImgPath, file))
      )
      const pngFullPath = path.resolve(fullImgPath, `${index.toString()}.png`)
      const jpegThumbPath = path.resolve(
        thumbImgPath,
        `${index.toString()}.jpeg`
      )
      const fileMetadata = await sharpFileInstance.metadata()
      const exifData = exif(fileMetadata.exif)
      const imageAr = gcd(fileMetadata.width, fileMetadata.height)
      const fullDataObj = {
        src: `/img/gallery/full/${index.toString()}.png`,
        width: fileMetadata.width / imageAr,
        height: fileMetadata.height / imageAr,
        date: exifData.exif.DateTimeOriginal,
        title: `${date(exifData.exif.DateTimeOriginal, 'dd-MM-yyyy')} | ${
          exifData.image.Make.split(' ')[0]
        } - ${exifData.image.Model}`,
      }

      const thumbDataObj = {
        src: `/img/gallery/thumb/${index.toString()}.jpeg`,
        width: fileMetadata.width / imageAr,
        date: exifData.exif.DateTimeOriginal,
        height: fileMetadata.height / imageAr,
      }

      fileData.full.push(fullDataObj)
      fileData.thumb.push(thumbDataObj)

      sharpFileInstance
        .resize({ width: Math.round(fileMetadata.width / 4) })
        .jpeg({ quality: 50 })
        .toFile(jpegThumbPath)
        .catch(err => {
          console.error(err)
        })

      sharpFileInstance
        .png({ lossless: true, quality: 100 })
        .toFile(pngFullPath)
        .catch(err => {
          console.error(err)
        })

      console.log(`Procesing ${index + 1} out of ${files.length}...`)
    })
  )
  console.log('Done')
  fileData.thumb = fileData.thumb.sort((a, b) => {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateB - dateA;
  })
  fileData.full = fileData.full.sort((a, b) => {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateB - dateA;
  })
  return fileData
}

handleFiles().then(data => {
  console.log('Generating data file...')
  photosTemplate = photosTemplate.replace(
    /\${fullPhotosData}/gm,
    JSON.stringify(data.full, null, 4)
  )
  photosTemplate = photosTemplate.replace(
    /\${thumbPhotosData}/gm,
    JSON.stringify(data.thumb, null, 4)
  )

  fse.writeFileSync(path.resolve(__dirname, 'photos.js'), photosTemplate)
})
