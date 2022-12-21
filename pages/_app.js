import '../styles/globals.css'
import SharedLayout from "../components/SharedLayout"

function MyApp({ Component, pageProps }) {
  return (
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
  )
}

export default MyApp
