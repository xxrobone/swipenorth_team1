import Head from 'next/head';
// import Job from '../components/savedJobs/savedJobs'
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/topbar/TopBar';
import JobSwipe from '@/components/jobswipe/JobSwipe';
import { jobData } from '@/data/jobs';

const OPTIONS = { axis: 'y' };

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
      <>
        <TopBar />
        <section className={styles.swipe_wrapper}>
          <JobSwipe options={OPTIONS} data={jobData} />
        </section>
      </>
    </>
  );
}
