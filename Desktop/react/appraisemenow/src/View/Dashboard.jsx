import {React, useEffect, useState} from "react";
import '../Styles/Dashboard.css';
import Navbar from './Navbar';
import PieChart from './PieChart';
import Sidebar from './Sidebar';


function Dashboard(){
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    const tableData = [
        { column1: 'Data 1', column2: 'Value 1', column3: 'Data 5', column4: <input type="checkbox" name="name1" value="1"/>},
        { column1: 'Data 2', column2: 'Value 2', column3: 'Data 5', column4: <input type="checkbox" name="name2" value="2"/>},
        { column1: 'Data 3', column2: 'Value 3', column3: 'Data 5', column4: <input type="checkbox" name="name3" value="3"/>},
      ];

  useEffect(() => {
    // Update date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  const currentDate = currentDateTime.toLocaleDateString();
  const currentTime = currentDateTime.toLocaleTimeString();

    return(
        <>
        <Navbar/>
        <div className="Dashboard">
            <Sidebar/>
            <div style = {{display:"flex",flexDirection: "column", width: '100%'}}>
            <span style={{margin: "0 auto" , fontFamily: "Roboto"}}>
            <h1>DATE: {currentDate} , TIME: {currentTime}</h1>
            </span>
            <PieChart/>
            <div className="tableDashboard" style={{margin: '0 1rem'}}>
                <table border='1' style={{width: '100%' , margin: "2rem 0 1rem 0"}}>
                    <thead>
                        <tr>
                            <th> Task ID</th>
                            <th> Task Description</th>
                            <th> Task Date</th>
                            <th> Task Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                            <td>{row.column1}</td>
                            <td>{row.column2}</td>
                            <td>{row.column3}</td>
                            <td>{row.column4}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>

        </>
    )
}

export default Dashboard;