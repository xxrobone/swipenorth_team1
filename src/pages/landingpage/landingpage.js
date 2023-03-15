import Landing from '@/components/landing/Landing';

export default function Landing() {
  return (
    <>
      <Head>
        <title>Välkommen hem till Skellefteå!</title>
        <meta
          name='description'
          content='Swipe North application for jobs in Skellefteå community'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Landing />
      </main>
    </>
  );
}
