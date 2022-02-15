import ErrorPageComponent from '@/components/pages/error';
import { NextPage } from 'next';
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div>
        <ErrorPageComponent statusCode={404} />
      </div>
    </>
  );
};

export default NotFoundPage;
