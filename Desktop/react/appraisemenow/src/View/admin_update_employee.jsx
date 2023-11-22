// UpdateForm.js
import React, { useState } from 'react';
import '../Styles/style_update_form_admin.css';
const UpdateForm = ({ employee, onUpdate, onCancel }) => {
  const [updatedEmployee, setUpdatedEmployee] = useState(employee || {
    name: '',
    designation: '',
    email: '',
    joinDate: '',
    employeeLevel: 1,
    // Add other properties with default values
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedEmployee);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='input-container'>
      <label>
        Name:
        <input type="text" name="name" value={updatedEmployee.name} onChange={handleChange} />
      </label>
      <label>
        Designation:
        <input type="text" name="designation" value={updatedEmployee.designation} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={updatedEmployee.email} onChange={handleChange} />
      </label>
      <label>
        Join Date:
        <input type="text" name="joinDate" value={updatedEmployee.joinDate} onChange={handleChange} />
      </label>
      <label>
        Employee Level:
        <input type="number" name="employeeLevel" value={updatedEmployee.employeeLevel} onChange={handleChange} />
      </label>
      </div>
      {/* Add input fields for other employee properties */}
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateForm;
