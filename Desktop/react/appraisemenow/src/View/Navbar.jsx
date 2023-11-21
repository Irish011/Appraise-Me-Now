import React from "react";
import {FiSettings} from "react-icons/fi";
import './NavBar.css';
import { icons } from "react-icons";
import {CgProfile} from "react-icons/cg";

function Navbar(){
    return(
        <div>
         <nav class="navbar">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <div class="icons">
            <li><a href="#"><FiSettings/></a></li>
            <li><a href="#"><CgProfile/></a></li>
            </div>

            
        </ul>
    </nav>
        </div> 

    )

}
export default Navbar;
