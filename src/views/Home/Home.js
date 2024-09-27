import Navabr from "../../components/Navbar/Navbar"
import "./Home.css"
import menuData from "./../../configData/data.js"
import Foodcard from "../../components/FoodCard/Foodcard"


function Home() {
  return (
    <>
    <Navabr/>
    <h1 className="heading">Welcome to Pranay Da Dhaba</h1>
      
{
  <div className="foodcard-container">
      {
          menuData.map((blogobj,i)=>{

            const {imgurl,title,description,price,isVeg} =blogobj

            return<Foodcard imgurl={imgurl} title={title} description={description} price={price} isVeg={isVeg}/>

          })
      }
      </div>
    }

    </>
  )
}

export default Home