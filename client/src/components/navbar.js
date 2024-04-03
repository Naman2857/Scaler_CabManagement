import React from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft , faTaxi } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='navbar'> 
      <div className='navbar-text'>Cab Booking System</div>
      <div className='navbar-buttons'> 
        <a href="#book">Book Ride <FontAwesomeIcon icon={faTaxi} size="lg" /></a>
        <a href="#Cabs">Cabs Booked <FontAwesomeIcon icon={faClockRotateLeft} size="lg" /></a>
      </div>
    </div>
  );
}

export default Navbar;
