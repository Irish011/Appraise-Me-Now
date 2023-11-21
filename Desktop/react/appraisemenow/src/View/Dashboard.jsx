import React from "react";
import '../Styles/Dashboard.css';
import Navbar from './Navbar';
import Piechart from './Piechart';
import Sidebar from './Sidebar';


function Dashboard(){
    return(
        <>
        <Navbar/>
        <div className="Dashboard">
            <Sidebar/>
            <Piechart/>
        </div>

        </>
    )
}

export default Dashboard;