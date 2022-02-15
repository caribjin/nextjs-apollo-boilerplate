import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import HomePageComponent from '@/components/pages/home';

const HomePage: NextPage = () => {
  return (
    <>
      <HomePageComponent />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;
