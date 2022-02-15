import { Spinner } from '@chakra-ui/react';
import AccessDenied from '@/components/auth/accessDenied';
import LaunchesPageComponent from '@/components/pages/launches';
import { GetStaticProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import SessionType from 'src/types/session';

type Props = {
  session: SessionType;
};

const TodosPage: NextPage<Props> = props => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <Spinner />;
  if (!session) return <AccessDenied />;

  return (
    <>
      <Head>
        <title>Launches Page</title>
      </Head>
      <LaunchesPageComponent />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default TodosPage;
