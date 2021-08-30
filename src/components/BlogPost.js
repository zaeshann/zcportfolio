import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const BlogPost = (props) => {

    return (
         
        <div className="  flex w-80 lg:w-3/4 flex-col  items-center justify-center bg-gray-800 flex-wrap mb-4 rounded-3xl transform transition duration-300
        hover:scale-110" >
            <Link className="w-full" to={`/post/${props.id}`}>
            <div className="img_container w-full  mb-2">
                <img className="w-full object-cover h-48 lg:h-36 "src={props.photo} alt="lala" /> 
            </div>
            </Link>
          <p key={props.index} className="text-lg lg:text-sm font-semibold mb-4 text-center px-2 lg:px-0">{props.title.toUpperCase()}</p>
        </div>
        
        
    )
}

export default BlogPost
