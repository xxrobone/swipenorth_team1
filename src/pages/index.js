import Head from 'next/head';
// import Job from '../components/savedJobs/savedJobs'
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Landing from '@/components/landing/Landing';
import TopBar from '@/components/topbar/TopBar';
import YSwipe from '@/components/yaxisswipe/YSwipe';


import IMG1 from '/public/images/image1.png'
import IMG2 from '/public/images/image2.png'
import IMG3 from '/public/images/image3.png'
import IMG4 from '/public/images/image4.png'



const inter = Inter({ subsets: ['latin'] });

const OPTIONS = { axis: 'y' }




export const ImageData = [
    {
      title: 'Skellefteå taxi',
      desc: 'Taxichaufför',
      id: 1,
      img: IMG1,
    },
    {
      title: 'Northvold',
      desc: 'Gruppchef',
      id: 2,
      img: IMG2,
    },
    {
      title: 'Skellefteå Lasarett',
      desc: 'Sjuksköterska',
      id: 3,
      img: IMG3,
    },
    {
      title: 'Skellefteå Kommun',
      desc: 'Förskolepedagog',
      id: 4,
      img: IMG4,
    },
];

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
        <section className={styles.swipe_wrapper}>
          <YSwipe options={OPTIONS} data={ImageData} />
    </section>
      </main>
    </>
  );
}
