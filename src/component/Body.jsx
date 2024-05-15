import React from "react";
import './header.css';
import ResturantCard from './RestaurantCard';
import restaurantList from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmereffect";



function Body () {
    //Local State Variable -- Super powerful variable
    const [resList,setresList]=useState([]);// this is giving array & arr[0]=resList ,arr[1]=setresList where arr=useState(restaurantList)
    const [filterList,setfilterList]=useState([]);
    const [search,setSearch]=useState("");
    
    useEffect(()=>{ 
        fetchData();
    },[]);

    // console.log("rendered");
    //whenever state variable update , react triggers a reconciliation cycle(re render the component)
    const fetchData=async()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4743879&lng=77.50399039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json= await data.json();
        console.log(json);

       // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setresList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setfilterList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //console.log(resList);

    }

    //conditional rendering
    // if(resList.length===0){
    //     return <Shimmer/>;
    // }



    return resList.length===0?<Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="searchbox"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    />
                    <button className="search-btn"
                    onClick={()=>{
                        console.log(search);

                        const filterRestaurant=resList.filter(
                            (res)=>res.info.name.toLowerCase().includes(search.toLowerCase())
                        );
                        setfilterList(filterRestaurant);

                    }}
                    >Search</button>
                </div>
                <button className="filter-btn"
                    //onclick effect
                    onClick={() => {
                        const filter = resList.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setfilterList(filter);
                    }}  
                >
                    Top rated Restaurant near you
                </button>
            </div>
            <div className="rest-container">
                {filterList.map((restaurant)=>(
                    <ResturantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>

        </div>
    )
}

export default Body;