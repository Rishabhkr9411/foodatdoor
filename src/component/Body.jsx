import React from "react";
import './header.css';


const ResturantCard=(props)=>{
    return(
        <>
        <div className="rest-card">
            <img className="res-logo" src={props.image} alt="" />
            <h3>{props.resname}</h3>
            <h5>{props.cuisinie}</h5>
            <h5>{props.star}</h5>
            <h5>{props.time}</h5>
        </div>
        </>
    )
}

function Body() {
    return(
        <div className="body">
            <div className="search">
                <button className="search">Search</button></div>
            <div className="rest-container">
                <ResturantCard resname="KFC" cuisinie="Chicken,Fast Food" time="30 minutes" rating="4.3" image="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/768px-KFC_logo.svg.png"/>
                <ResturantCard resname="Domminos" cuisinie=" Paneer pizza, Onion Pizza,Corn Pizza" time="30 minutes" rating="4.5" image="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/wjfulby1x23tpttm2dua" />
                <ResturantCard resname="Chai Wala" cuisinie="Chai, Biscuits,Cookies" time="35 minutes" rating="4.0" image="https://i.pinimg.com/736x/5c/c1/60/5cc1603d5cafacd497f0aaa42da62be4.jpg"/>
                <ResturantCard resname="Halwa Wala" cuisinie="Besan Halwa, Suji Halwa" time="60 minutes" rating="4.7" image="https://www.shutterstock.com/image-vector/gajar-halwa-indian-punjabi-food-600w-1617793195.jpg"/>
                <ResturantCard resname="Amrit Sweets" cuisinie="sweets," time="40 minutes"rating="3.9"image="https://im.whatshot.in/content/2015/Aug/1439797986-sweet-shops.jpg?q=90"/>
            </div>

        </div>
    )

}

export default Body;