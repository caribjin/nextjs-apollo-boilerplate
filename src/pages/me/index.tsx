import MeHomePageComponent from '@/components/pages/me';
import { GetServerSideProps, NextPage } from 'next';

const MeHomePage: NextPage = () => {
  return <MeHomePageComponent />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default MeHomePage;
