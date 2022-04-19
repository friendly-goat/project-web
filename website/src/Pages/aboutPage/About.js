import React from 'react'
import Header from '../../Components/Header/Header'
import inside_church from "../../images/inside_church.webp"
import "./About.css"
function About() {
  return (
      
    <div>
        <Header />
        <img id="inside_church_id" src={inside_church}/>
        <div id="text_div">
          <p id="p1">
            This website was created for All Saints Of Russia Church for the Easter celebration bake sale.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div id="lank">
              <a href="http://rocadenver.org/" target="_blank">All Saints of Russia Denver Website</a>
          </div>
        </div>
    </div>
  )
}

export default About