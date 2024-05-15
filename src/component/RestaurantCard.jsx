import { newImg_CDN_Url } from "../utils/constants";
import './header.css';


const RestaurantCard =(props)=> {
      const {resData}=props;

    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla, 
        areaName,
    }=resData?.info
  
  return (
    <div className= "res-card" style={{backgroundColor: "#f0f0f0", margin:"10px",}// using inline css 
    }>
        <img className="res-logo"
        src={newImg_CDN_Url+cloudinaryImageId}
        alt="res-logo" />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4 style={{color:"green"}}>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4  style={{color:"blue"}}>{areaName}</h4>
        <h4 style={{color:"red"}}>{sla.deliveryTime} min</h4>

    </div>
  );
};
export default RestaurantCard;