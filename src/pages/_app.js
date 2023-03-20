import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'
import {useEffect, useState} from 'react'
import Landing from '@/components/landing/Landing'


export default function App({ Component, pageProps }) {
  const [hasVisited, setHasVisited] = useState(false)

  return (
    <Layout>
      {
      hasVisited ? (
          <Component {...pageProps} />
          ) : (
            <Landing hasVisited={hasVisited} setHasVisited={setHasVisited}/>
          )
        }
        </Layout>        
  
  )
}
