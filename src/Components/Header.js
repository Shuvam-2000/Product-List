import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className='nav-section'>
      <div className='nav-item'>
        <h2>Home</h2>
      </div>
      <div className='nav-item'>
        <h2>Product</h2>
      </div>
      <div className='nav-item'>
        <h2>Cart</h2>
      </div>
      </div>
    </div>
  )
}

export default Header
