import Head from 'next/head';
// import Job from '../components/savedJobs/savedJobs'
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Landing from '@/components/landing/Landing';
import TopBar from '@/components/topbar/TopBar';

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
        <TopBar />
        {/* <Landing /> */}
      </main>
    </>
  );
}
