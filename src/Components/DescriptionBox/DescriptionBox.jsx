import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (100)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates 
            buying and selling of products or services over the internet.
            It provides a virtual marketplace where businesses and individuals showcase
            their products, interact with customers, and process transactions securely.
            E-commerce websites typically include features such as product listings,
            shopping carts, payment gateways, and customer reviews.
        </p>
        <p>
            E-commerce websites typically display products or services along with
            detailed descriptions, images, and prices. Customers can browse through categories,
            search for specific items, and add products to their virtual shopping carts.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
