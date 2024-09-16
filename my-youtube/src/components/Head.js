import { toogleMenu } from "../Utils/appSlice";
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { YOUTUBE_SEARCH_API } from "../Utils/constant";
import { cacheResults } from "../Utils/searchSlice";
const Head = () => {

  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const searchCache=useSelector(store=>store.search);



  useEffect(()=>{
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }
    else{
      getSearchSuggestions()
    }
    //API call
    const timer= setTimeout(()=>getSearchSuggestions(),200);
    return (
      ()=>{
        clearTimeout(timer);
      }
    )
    
    //make an api call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the API call(called Debouncing)
    
  },[searchQuery])
  const getSearchSuggestions=async()=>{
    console.log(searchQuery);
    const data=await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json=await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults(
      {
        [searchQuery]:json[1],
      }
    ))
  }

  const dispatch =useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toogleMenu());

  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-">
      <div className="flex col-span-1">
        <img className="h-8 cursor-pointer" onClick={()=>toggleMenuHandler()} alt="menu" src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg" />
       
       <a href="/">
        <img className="h-8 mx-2 cursor-pointer" alt="youtube-logo" src="https://as1.ftcdn.net/v2/jpg/05/07/46/84/1000_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg" />
        </a>
      </div>
      <div className="col-span-10 px-10  ">
        <input className="w-1/2  px-5 py-2 rounded-l-full border-[1px] border-gray-400" type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)} />
        <button className="rounded-r-full py-2 px-5 bg-gray-200 border-[1px] border-gray-400 shadow-lg ">🔍</button>
        {showSuggestions && (
        <div className="absolute bg-white py-2 px-5 w-[37rem] rounded-lg shadow-lg bg-red">
          <ul>
            {suggestions.map((s)=><li className="shadow-sm  py-2 hover:bg-gray-200" key={s}> 🔍 {s}</li>)}
            
          

        
          </ul>
        </div>)}
      </div>
      <div className="col-span-1">
        <img className="h-8 cursor-pointer" alt="user" src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg" />
      </div>
    </div>
  );
};

export default Head;
