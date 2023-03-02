import React from 'react'
import Shoes from './../Shoes.json'
import {Link}  from 'react-router-dom';


function Product() {
  console.log(Shoes)
  return (
    <div>
      <h1>this page is about the product of the site</h1>
      <div className='productContainer'>
        {Object.keys(Shoes).map(keyName =>{
          const Shoe = Shoes[keyName]
          return(
            <Link key = {keyName} className = "link" to={`/Product/${keyName}`}>
              <h4>{Shoe.name}</h4>
              <img src = {Shoe.img}  height = {150} alt = "shoe image"/> 
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Product
