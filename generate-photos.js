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
      const webpFullPath = path.resolve(fullImgPath, `${index.toString()}.webp`)
      const webpThumbPath = path.resolve(
        thumbImgPath,
        `${index.toString()}.webp`
      )
      const fileMetadata = await sharpFileInstance.metadata()
      const exifData = exif(fileMetadata.exif)
      console.log(exifData)
      const imageAr = gcd(fileMetadata.width, fileMetadata.height)
      const fullDataObj = {
        src: `/img/gallery/full/${index.toString()}.webp`,
        width: fileMetadata.width / imageAr,
        height: fileMetadata.height / imageAr,
        title: `${date(exifData.exif.DateTimeOriginal, 'dd-MM-yyyy')} | ${
          exifData.image.Make.split(' ')[0]
        } - ${exifData.image.Model}`,
      }

      const thumbDataObj = {
        src: `/img/gallery/thumb/${index.toString()}.webp`,
        width: fileMetadata.width / imageAr,
        height: fileMetadata.height / imageAr,
      }

      fileData.full.push(fullDataObj)
      fileData.thumb.push(thumbDataObj)

      sharpFileInstance
        .resize({ width: Math.round(fileMetadata.width / 2.5) })
        .webp({ quality: 75 })
        .toFile(webpThumbPath)
        .catch(err => {
          console.error(err)
        })

      sharpFileInstance
        .webp({ lossless: true })
        .toFile(webpFullPath)
        .catch(err => {
          console.error(err)
        })

      console.log(`Procesing ${index + 1} out of ${files.length}...`)
    })
  )
  console.log('Done')
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
