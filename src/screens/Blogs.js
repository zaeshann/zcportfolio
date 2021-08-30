import React, { useState, useEffect } from 'react'
import BlogPost from '../components/BlogPost'
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Blogs = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        console.log("ab chala")
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
               
            });
    }, [])

    const showData = data.map((el,index)=>{

         return index<9? <BlogPost key={index} title={el.title} photo={el.url} id={el.id} /> : null;
    })
    return (
        <div className="containerr  w-full flex flex-col bg-gray-700 py-36 px-24 lg:px-2 items-center justify-evenly">
            <p className="text-yellow-400 text-2xl">BLOGS</p>
            <div className="w-full  flex flex-row lg:flex-col   py-8 items-center justify-evenly flex-wrap ">
            
            {showData}

            </div>

        </div>
    )
}

export default Blogs
