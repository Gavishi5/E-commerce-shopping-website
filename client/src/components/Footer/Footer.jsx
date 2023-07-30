import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nesciunt accusantium recusandae quam saepe iste fugit exercitationem porro, consequatur accusamus commodi fugiat vel repudiandae dolorem, repellat vero consectetur, officia veritatis.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia quidem culpa cumque eos fuga dolorem rerum nemo dolor accusantium. Iure nemo autem nulla corporis corrupti laboriosam error, impedit ad.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>GAVISTORE</span>
          <span className='copyright'>© Copyright 2023 . All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer