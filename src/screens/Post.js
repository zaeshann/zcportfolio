import React, { useState, useEffect } from 'react'
import {
    useParams
} from "react-router-dom";
import axios from "axios";

function Post(props) {
    console.log(props)

    const { idd } = useParams()
   
    console.log("ye idd h",idd)
    

    
    const [dataa, setDataa] = useState([])
    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {

                setDataa(res.data)
                

            });
    }, [])
    const showDataa = dataa.map((el, index) => {

        return el.id == idd ? <div className="w-full  flex flex-col items-center justify-center py-12" key={index}>
            <p className="text-xl text-yellow-400">BLOG</p>
           <p className="text-3xl my-6 lg:text-center">Title: {el.title}</p>
           <div className="img_container w-1/2">
               <img className="w-full object-contain h-72"src={el.url} alt="" />
            </div> 
            </div> : null;
    })

    return (
        <div className="w-full flex flex-col items-center justify-center  py-24 " >
            {showDataa}
        </div>
    )
}

export default Post
