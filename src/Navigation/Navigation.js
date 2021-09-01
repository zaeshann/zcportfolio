import React from 'react'
import Blogs from "../screens/Blogs";
import Contact from "../screens/Contact";
import Main from "../screens/Main";
import Services from "../screens/Services";
import Projects from "../screens/Projects"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from '../screens/Post';

function Navigation() {
  return (

    <div className="">
      <Switch>
        <Route path="/post/:idd">

          <Post />

        </Route>
        <Route path="/skills">

          <Services />

        </Route>
        <Route path="/contact">

          <Contact />

        </Route>
        <Route path="/blog">


          <Blogs />

        </Route>
        <Route path="/projects">


          <Projects />

        </Route>

        <Route path="/">

          <Main />
          <Services />
          <Projects />
          <Contact />

        </Route>
      </Switch>

    </div>

  )
}

export default Navigation
