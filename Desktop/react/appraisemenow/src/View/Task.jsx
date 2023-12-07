import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const StyledTable = styled.table`
  width: 100%;
  margin: 2rem 0 1rem 0;
  border: 1px solid navy;
`;

const StyledTh = styled.th`
  background-color:  rgb(57, 65, 109);
  color: white;
  padding: 10px;
`;

const StyledTd = styled.td`
  padding: 10px;
  text-align: center;
`;

const StyledCheckbox = styled.input`
  margin-right: 5px;
`;

const getRandomName = () => {
  const names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Charlie Davis'];
  return names[Math.floor(Math.random() * names.length)];
};

const getRandomTaskName = () => {
  const taskNames = ['Design UI', 'Implement Feature', 'Bug Fixing', 'Code Review', 'Write Documentation'];
  return taskNames[Math.floor(Math.random() * taskNames.length)];
};

const getRandomDescription = () => {
  const descriptions = [
    'Create a responsive UI design for the new dashboard',
    'Implement a search feature with autocomplete functionality',
    'Fix the reported bugs in the user registration process',
    'Conduct a thorough code review for the recent changes',
    'Write comprehensive documentation for the project',
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const getRandomDueDate = () => {
  const currentDate = new Date();
  const randomDays = Math.floor(Math.random() * 10);
  const dueDate = new Date(currentDate.getTime() + randomDays * 24 * 60 * 60 * 1000);
  return dueDate.toLocaleDateString();
};

const getRandomStatus = () => Math.random() < 0.5;

const Task = () => {

  const [tableData, setTableData] = useState(Array.from({ length: 15 }, (_, index) => ({
    taskID: index + 1,
    taskName: getRandomTaskName(),
    assignedBy: getRandomName(),
    taskDescription: getRandomDescription(),
    dueDate: getRandomDueDate(),
    status: <StyledCheckbox type="checkbox" defaultChecked={getRandomStatus()} onChange={() => handleDelete(index)} />,
  })));

  const handleDelete = (index) => {
    const oldRow = [...tableData];
    oldRow.splice(index, 1);
    return oldRow;
    
  };

  return (
    <>
        <Navbar/>
      <div className="Dashboard" style={{ margin: '0' }} >
        <Sidebar/>
        <StyledTable>
          <thead>
            <tr>
              <StyledTh>Task ID</StyledTh>
              <StyledTh>Task Name</StyledTh>
              <StyledTh>Assigned By</StyledTh>
              <StyledTh>Task Description</StyledTh>
              <StyledTh>Due Date</StyledTh>
              <StyledTh>Status</StyledTh>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <StyledTd>{row.taskID}</StyledTd>
                <StyledTd>{row.taskName}</StyledTd>
                <StyledTd>{row.assignedBy}</StyledTd>
                <StyledTd>{row.taskDescription}</StyledTd>
                <StyledTd>{row.dueDate}</StyledTd>
                <StyledTd>{row.status}</StyledTd>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
    </>
  );
};

export default Task;
