import React from 'react';
import './Header.css'
import { useState } from 'react';

function components({black}) {
  return (
    <header className={black ? 'black' : ''}>
       <div className="header--logo">
        <a href="/">
            <img src="./src/assets/netflix-94.png" alt="Netflix-logo" />
        </a>
       </div> 
       <div className="header--user">
        <a href="/">
            <img src="./src/assets/fb8e8a96fca2f049334f312086a6e2f6--vini-cata.jpg" alt="user" />
        </a>
       </div>
    </header>
  );
}

export default components;