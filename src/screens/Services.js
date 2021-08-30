import React from 'react'
import htm from "../images/html5.png";
import logojava from "../images/logojava.png";
import css from "../images/css.png";
import imgreact from "../images/imgreact.png";
import mongo from "../images/mongo.png";
import node from "../images/node-express.png";
import express from "../images/express.png";




const Services = () => {
    return (
        <div className="   w-full flex px-24 lg:px-2 bg-gray-700 py-24 lg:py-12" id="serv">
            <div className=" container  flex flex-col w-full items-center  ">
                <p className="text-yellow-400 mb-2">SERVICES</p>
                <p className=" text-3xl font-bold mb-6">Things I Am Good At</p>
                <p className=" mb-4 text-yellow-400">Front-End Development</p>

                <div className="service_container  flex flex-row justify-between lg:justify-around w-full lg:flex-wrap lg:items-center">
                    <div className="service flex flex-col items-center justify-center py-6 px-12 lg:mb-4 lg:px-6  bg-gray-800 transform transition duration-300
                    hover:scale-110 rounded-3xl ">
                        <img className="object-contain w-36 mb-4  " src={htm} alt="" />
                        <p className="text-lg font-medium">HTML</p>
                    </div>
                    <div className="service flex flex-col items-center justify-center py-6 px-12 lg:mb-4 lg:px-6  bg-gray-800 transform transition duration-300
                    hover:scale-110 rounded-3xl">
                        <img className="object-contain w-36 mb-4  " src={css} alt="" />
                        <p className="text-lg  font-medium">CSS</p>
                    </div>
                    <div className="service flex flex-col items-center justify-center py-6 px-12 lg:mb-4  lg:px-6  bg-gray-800 transform transition duration-300
                    hover:scale-110 rounded-3xl">
                        <img className="object-contain w-36 mb-4   " src={logojava} alt="" />
                        <p className="text-lg  font-medium">JAVA SCRIPT</p>
                    </div>
                    <div className="service flex flex-col items-center justify-center py-6 px-12 lg:mb-4  lg:px-6 bg-gray-800 transform transition duration-300
                    hover:scale-110 rounded-3xl">
                        <img className="object-contain w-36 mb-6  " src={imgreact} alt="" />
                        <p className="text-lg  font-medium">REACT</p>
                    </div>
                   
                </div>
              
                <p className=" mb-4 text-yellow-400 mt-6">Back-End And Data Base</p>

                <div className="service_container flex flex-row justify-between lg:justify-around w-full lg:flex-wrap lg:items-center">
                    <div className="service flex flex-col items-center justify-center py-2 px-12 lg:mb-4 lg:px-6 bg-gray-800 transform transition duration-300
                    hover:scale-110 rounded-3xl ">
                        <img className="object-contain w-36 mb-4  " src={node} alt="" />
                        <p className="text-lg font-medium">NODE JS</p>
                    </div>
                    <div className="service flex flex-col items-center justify-center py-6 px-12 lg:mb-4 lg:px-6 bg-gray-800 transform transition duration-300
                    hover:scale-110 rounded-3xl">
                        <img className="object-contain w-36 mb-6  " src={express} alt="" />
                        <p className="text-lg  font-medium">EXPRESS</p>
                    </div>
                    <div className="service flex flex-col items-center justify-center py-6 px-12 lg:mb-4 lg:px-6 bg-gray-800 transform transition duration-300
                    hover:scale-110 rounded-3xl">
                        <img className="object-contain w-36 mb-4   " src={mongo} alt="" />
                        <p className="text-lg  font-medium">MONGO DB</p>
                    </div>
                   
                   
                </div>
            
            </div>


            
            
        </div>
    )
}

export default Services
