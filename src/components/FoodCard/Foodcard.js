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
    <h1 className='foodcard-title'>{title}</h1>
    <p className='footcard-description'>{description}</p>
    <p className='foodcard-price'>₹ {price}</p>
    <button className='foodcard-btn'>Add To Cart</button>
    </div>
    </>
  )
}

export default Foodcard