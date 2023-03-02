import React from 'react'
import { useParams } from 'react-router-dom'
import Shoes from './../Shoes.json'

function ProductItem() {
  const {id} = useParams();
 const shoe = Shoes[id];
 if(!shoe){
   return <h2>Product not found</h2>
 }
  return (
    <div>
      <h1>this page is about the product item of the site</h1>
      <div className = "link">
              <h4>{shoe.name}</h4>
              <img src = {shoe.img}  height = {500} alt = "shoe image"/> 
            </div>
    </div>
  )
}

export default ProductItem
