import React from 'react';
import "../styles/Banner.css";
import unnamedImage from '../assets/images/unnamed.png';

const Home = () => {
  return (
    <div className="container">
      <div className="container1">
        <div className="image-container">
          <img src={unnamedImage} alt="Unnnamed" />
        </div>
        <div className="text-container">
          <div className="component-top">
            <p>Need hassle-free cab management? Look no further!</p>
          </div>
          <div className="description">
            <p>With our top-notch cab management services, we've got you covered 24/7. Whether it's a ride to the airport or a late-night pickup, we're available whenever you need us.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
