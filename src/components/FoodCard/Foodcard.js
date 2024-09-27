import React from 'react'
import "./FoodCard.css";
import veg from "./veg-icon.png" ;
import nonveg from "./non-veg-icon.png"

function Foodcard({imgurl,title,description,price,isVeg}) {
  return (
 <>
 <div className='footcard'>
    <img src={imgurl} className='foodcard-image' alt='foodcard-icon'/>
    <img src= {isVeg ? veg : nonveg } className='category-icon' alt='category-icon'/>
    <span className='foodcard-title'>{title}</span>
    <span className='footcard-description'>{description}</span>
    <span className='foodcard-price'>₹ {price}</span>
    <button className='foodcard-btn'>Add To Cart</button>
    </div>
    </>
  )
}

export default Foodcard