import React from 'react';
import Jumbotron from '../components/cards/Jumbotron';
import NewArrivals from '../components/home/NewArrivals';
import CategoryList from '../components/category/CategoryList';
import SubList from '../components/sub/SubList';

import HeroSection from '../components/home/HeroSection';
const Home = () => {
  return (
    <div className="bg-page">
      <div style={{ backgroundColor: '#ffc266' }} className="jumbotron text-danger h1 p-4 font-weight-bold text-center">
        <Jumbotron text={['Thaiios', 'Best Sellers']} />
      </div>
      <HeroSection />
      <h4 style={{ backgroundColor: 'white' }} className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 style={{ backgroundColor: 'white' }} className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Categories
      </h4>
      <CategoryList />

      <h4 style={{ backgroundColor: 'white' }} className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Sub Categories
      </h4>
      <SubList />

      <br />
      <br />
    </div>
  );
};

export default Home;
