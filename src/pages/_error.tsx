import ErrorPageComponent from '@/components/pages/error';
import { NextPage } from 'next';
import Head from 'next/head';

type Props = {
  statusCode: number;
};

const ErrorPage: NextPage<Props> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <ErrorPageComponent statusCode={statusCode} />
    </>
  );
};

ErrorPage.getInitialProps = async ({ res, err }): Promise<Props> => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  if (!statusCode) return { statusCode: 404 };
  return { statusCode };
};

export default ErrorPage;
