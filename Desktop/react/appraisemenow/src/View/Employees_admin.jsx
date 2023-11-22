import React, { useState } from 'react';
import '../Styles/style_employee_admin.css';
import Layout from './layout_admin';
import UpdateForm from './admin_update_employee';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      employeeID: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      email: 'john.doe@example.com',
      joinDate: '2022-01-01',
      employeeLevel: 1,
    },
    {
      employeeID: 2,
      name: 'Jane Doe',
      designation: 'Product Manager',
      email: 'jane.doe@example.com',
      joinDate: '2022-02-01',
      employeeLevel: 2,
    },
    {
        employeeID: 3,
        name: 'Jack Doe',
        designation: 'Product Manager',
        email: 'jack.doe@example.com',
        joinDate: '2022-02-01',
        employeeLevel: 3,
      },
    // Add more employees as needed
  ]);

  const handleAddEmployee = () => {
    const maxEmployeeID = Math.max(...employees.map((employee) => employee.employeeID));
    const newEmployee = {
      employeeID: maxEmployeeID + 1,
      name: `New Employee ${employees.length + 1}`,
      designation: 'New Designation',
      email: 'new.employee@example.com',
      joinDate: '2023-01-01',
      employeeLevel: 1,
    };

    setEmployees([...employees, newEmployee]);
  };

  const handleDeleteEmployee = (employeeID) => {
    const updatedEmployees = employees.filter((employee) => employee.employeeID !== employeeID);
    setEmployees(updatedEmployees);
  };
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleUpdateEmployee = (employeeID) => {
    const employeeToUpdate = employees.find((employee) => employee.employeeID === employeeID);
    setSelectedEmployee(employeeToUpdate);
    setShowUpdateForm(true);
  };
  
  const handleUpdateSubmit = (updatedEmployee) => {
    // Update the state with the new employee information
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.employeeID === updatedEmployee.employeeID ? updatedEmployee : employee
      )
    );
    // Close the update form
    setShowUpdateForm(false);
  };
  const handleUpdateCancel = () => {
    // Close the update form without updating
    setShowUpdateForm(false);
  };

  return (
    <Layout>
      <div className="employee-container">
        <h1>Employee List</h1>

        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Join Date</th>
              <th>Employee Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employeeID}>
                <td>{employee.employeeID}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.email}</td>
                <td>{employee.joinDate}</td>
                <td>{employee.employeeLevel}</td>
                <td>
                  <button onClick={() => handleUpdateEmployee(employee.employeeID)}>
                    Update
                  </button>
                  <button onClick={() => handleDeleteEmployee(employee.employeeID)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='spacing-div'></div>
        {showUpdateForm && (
          <UpdateForm employee={selectedEmployee} onUpdate={handleUpdateSubmit} onCancel={handleUpdateCancel} />
        )}
        <button className="add-button" onClick={handleAddEmployee}>
          Add New Employee
        </button>
      </div>
    </Layout>
  );
};

export default EmployeeList;
