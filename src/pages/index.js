import Head from 'next/head'
import Image from 'next/image'
// import Job from '../components/savedJobs/savedJobs'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Head from 'next/head';
import { Inter } from 'next/font/google';
import YaxisSwipe from '@/components/yaxisswipe/YaxisSwipe';
import styles from '@/styles/Home.module.css';
import Landing from '@/components/landing/Landing'
import Footer from '@/components/footer/Footer';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Swipe North application for jobs in Skellefteå community'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <YaxisSwipe />
        {/* <Landing /> */}
        <Footer />
      </main>
    </>
  );
}
