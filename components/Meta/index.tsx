import Head from 'next/head'


/**
 * Not used atm
 * 
 */
const Meta = props => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content="" />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content="Little pieces of time" />
    <meta name="og:description" property="og:description" content="" />
    <meta property="og:site_name" content="Little pieces of time" />
    <meta property="og:url" content="" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Little pieces of time" />
    <meta name="twitter:description" content="" />
    <meta name="twitter:site" content="@gariasf" />
    <meta name="twitter:creator" content="@gariasf" />
    <link rel="icon" type="image/png" href="/public/favicon.ico" />
    <link rel="apple-touch-icon" href="/public/favicon.ico" />
    <meta property="og:image" content="" />
    <meta name="twitter:image" content="" />
    <link rel="canonical" href="https://gariasf.com" />
  </Head>
)
export default Meta
