import React from 'react';
import { MainBox, BodyBox } from './style';
import Header from 'src/components/header/index';
import UseService from 'src/components/UseService/index';
import MyService from 'src/components/MyService/index';
import ServiceSituation from 'src/components/ServiceSituation/index';
import Graph from 'src/components/Graph/index';
import Footer from 'src/components/Footer/index';
import PlusButton from 'src/components/PlusButton/index';

const MainPage = () => {
  return (
    <MainBox>
      <Header />
      <BodyBox>
        <UseService />
        <MyService />
        <ServiceSituation />
        <Graph />
      </BodyBox>
      <Footer />
      <PlusButton />
    </MainBox>
  );
};

export default MainPage