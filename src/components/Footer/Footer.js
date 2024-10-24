import React from 'react'
import logo from "./../Navbar/logo.png"
import "./Footer.css"
import { Link } from 'react-router-dom'

import {FOOTER_LINKS} from "./../../configData/data.js"

function Footer() {
    return (
        <>
            <div className='footer-container'>
                <img src={logo} className='footer-logo' />

                <div className='footer-item-container'>
                    <Link to={"/"} className='footer-item'>Home</Link>
                    <Link to={"/product"} className='footer-item'>Product</Link>
                    <Link to={"/about"} className='footer-item'>About</Link>
                    <Link to={"/contact"} className='footer-item'>Contact</Link>
                </div>
                <div className='footer-item-container'>
                    <Link to={"/"} className='footer-item'>Terms And Conditions</Link>
                    <Link to={"/"} className='footer-item'>Security Policy</Link>
                    <Link to={"/"} className='footer-item'>FAQ</Link>
                    <Link to={"/"} className='footer-item'>Support</Link>
                </div>

                <div className='footer-item-container' >
                    <h3>Address : - </h3>
                    <span>404 , Samadhan complex , more layout ,<br/>
                     sadar , Nagpur 440100 </span>
                    <div className='footer-icon-container'>

                  {FOOTER_LINKS.map((footerObj,i)=>{
                const {imgUrl,alt} =footerObj
                return <img src={imgUrl} className='footer-icon'/>


                  })}
                        {/* <img src={mail} className='footer-icon' />
                        <img src={facebook} className='footer-icon' />
                        <img src={watsapp} className='footer-icon' />
                        <img src={instagram} className='footer-icon' /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer