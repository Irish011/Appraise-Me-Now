import React from "react";
import '../Styles/Dashboard.css';
import Navbar from './Navbar';
import PieChart from './PieChart';
import Sidebar from './Sidebar';


function Dashboard(){
    return(
        <>
        <Navbar/>
        <div className="Dashboard">
            <Sidebar/>
            <PieChart/>
        </div>

        </>
    )
}

export default Dashboard;