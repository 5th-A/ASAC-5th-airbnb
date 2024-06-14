import Providers from '@/redux/Providers'
import './index.css'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>에어비앤비</title>
        <link
          rel='shortcut icon'
          sizes='76x76'
          type='image/x-icon'
          href='https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico'
        />
        <meta name='description' content='Web site created...' />
      </head>
      <body>
        <Providers>
          <div id='root'>{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
