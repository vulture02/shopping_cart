import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../stye/navbar.css';  
const NavBar = ({ size, setshow }) => {
  return (
    <nav>
      <div className='nav_box'>
        <span className='my_shop'>MyBookHouse</span>
        <div className='cart' onClick={() => setshow(false)}>
          <span>
            <i className='fas fa-cart-plus'></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
