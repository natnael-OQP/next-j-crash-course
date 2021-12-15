import 'tailwindcss/tailwind.css'
import Layout from '../layout/Default'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
