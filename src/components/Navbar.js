import React from 'react'
import logo from "../images/logo.png";
import insta from "../images/insta.png";
import lin from "../images/in.png";
import fb from "../images/fb.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    console.log(toggle)
    return setToggle(!toggle)
  }
  return (
    <div className="w-full" >

      <div className=" hidden text-yellow-400 lg:flex lg:fixed  top-8 right-8 z-20">
        <button onClick={handleToggle}>
          <MenuIcon fontSize="large" />
        </button>
      </div>

      <nav className="flex w-full flex-row lg:flex-col lg:items-center lg:justify-center   py-8 px-24 lg:px-6 relative  bg-gray-800 top:0 z-10">
        <div className="logo_container w-3/5 lg:w-full lg:flex-col lg:items-center lg:justify-center">
          <Link to="/">
            <img src={logo} className="object-fit h-6 transform transition duration-300
                    hover:scale-110" />
          </Link>
        </div>
        {/* items for large devices */}
        <div className="item_container flex lg:hidden lg:w-full lg:py-8 items-center justify-end  w-2/5">
           <p  className="item mr-4  transform transition duration-300 lg:mb-4 lg:font-normal lg:text-2xl
                     hover:scale-110 hover:text-yellow-400 "><Link to="/">Home</Link></p>
          
          <p className="item mr-4 transform transition duration-300 lg:mb-4 lg:font-normal lg:text-2xl
                      hover:scale-110 hover:text-yellow-400"><Link to="/skills">Skills</Link></p>
          <p className="item mr-4 transform transition duration-300 lg:mb-4 lg:font-normal lg:text-2xl
                      hover:scale-110 hover:text-yellow-400"><Link to="/blog">Blogs</Link></p>
          <p className="item mr-4 transform transition duration-300 lg:mb-4 lg:font-normal lg:text-2xl
                      hover:scale-110 hover:text-yellow-400"><Link to="/contact">Contact-Me</Link></p>
          <p className="item mr-4 font-medium lg:hidden">|</p>
          <a href="http://facebook.com/zaeshann">
            <img src={fb} className="object-fit h-4 mr-4 transform transition duration-300 lg:mb-4 lg:h-6
                      hover:scale-110 hover:text-yellow-400" />
          </a>
          <a href="http://instagram.com/zaeshann">
            <img src={insta} className="object-fit h-4 mr-4 transform transition duration-300 lg:mb-4 lg:h-6
                        hover:scale-110 hover:text-yellow-400"/>
          </a>
          <a href="https://www.linkedin.com/in/zeeshancoding/">
            <img src={lin} className="object-fit h-4 mr-4 transform transition duration-300 lg:mb-4 lg:h-6
                        hover:scale-110 hover:text-yellow-400"/>
          </a>

        </div>
        {/* items for small devices */}
        <div className={toggle? "item_container flex lg:flex-col lg:w-full lg:py-8 items-center justify-end  w-2/5 lg:fixed  top-16 bg-gray-800 z-20 ":"hidden"}>
          <p className="item mr-4  transform transition duration-300 lg:mb-4 lg:font-normal lg:text-2xl
                     hover:scale-110 hover:text-yellow-400 "><Link to="/">Home</Link></p>
          <p className="item mr-4 transform transition duration-300 lg:mb-4 lg:font-normal lg:text-2xl
                      hover:scale-110 hover:text-yellow-400"><Link to="/skills">Skills</Link></p>
          <p className="item mr-4 transform transition duration-300 lg:mb-4 lg:font-normal lg:text-2xl
                      hover:scale-110 hover:text-yellow-400"><Link to="/blog">Blogs</Link></p>
          <p className="item mr-4 transform transition duration-300 lg:mb-4 lg:font-normal lg:text-2xl
                      hover:scale-110 hover:text-yellow-400"><Link to="/contact">Contact-Me</Link></p>
          <p className="item mr-4 font-medium lg:hidden">|</p>
          <a href="http://facebook.com/zaeshann">
            <img src={fb} className="object-fit h-4 mr-4 transform transition duration-300 lg:mb-4 lg:h-6
                      hover:scale-110 hover:text-yellow-400" />
          </a>
          <a href="http://instagram.com/zaeshann">
            <img src={insta} className="object-fit h-4 mr-4 transform transition duration-300 lg:mb-4 lg:h-6
                        hover:scale-110 hover:text-yellow-400"/>
          </a>
          <a href="https://www.linkedin.com/in/zeeshancoding/">
            <img src={lin} className="object-fit h-4 mr-4 transform transition duration-300 lg:mb-4 lg:h-6
                        hover:scale-110 hover:text-yellow-400"/>
          </a>

        </div>
      </nav>

    </div>
  )
}

export default Navbar
