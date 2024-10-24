import Navabr from "../../components/Navbar/Navbar"
import "./Home.css"
import {PRODUCTS,BRAND_NAME,THEME_COLOR} from "./../../configData/data.js"
import Foodcard from "../../components/FoodCard/Foodcard"
import Footer from "../../components/Footer/Footer.js"
import SimpleSlider from './../../components/Slider/Slider.js'


function Home() {
  return (
    <>
    <Navabr/>
    <h1 className="heading " style={{color:THEME_COLOR.secondery}}>{BRAND_NAME}</h1>

    <SimpleSlider />
      
{
  <div className="foodcard-container">
      {
          PRODUCTS.map((blogobj,i)=>{

            const {imgurl,title,description,price,isVeg} =blogobj

            return<Foodcard imgurl={imgurl} title={title} description={description} price={price} isVeg={isVeg}/>

          })
      }
      </div>
    }
    <Footer/>
    </>
  )
}

export default Home