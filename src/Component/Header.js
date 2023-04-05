import React from 'react';
import logo from './Assets/logo.jpg';

export default function Header() {
  return (
    <div className='head'>
        <img src={logo} alt='logo' className='logo'></img>
        <a href="./Header">Home</a>
        <a href="./Product">Products</a>
        <a href="./Footer">Contacts</a>
    </div>
  )
}
