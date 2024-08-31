import React from 'react'
import "./Table.css";

const Table = ({employees,currentPage}) => {
  const startIndex = (currentPage -1)*10;
  const endIndex = Math.min(startIndex + 10, employees.length)

  return (
    <table>
      <thead>
       <tr>
            <th className='left-align'>ID</th>
            <th className='left-align'>Name</th>
            <th className='left-align'>Email</th>
            <th className='left-align'>Role</th>
        </tr>
        </thead>

        <tbody>
         {employees.slice(startIndex,endIndex).map((employee)=>(
           <tr key={employee.id}>
           <td>{employee.id}</td>
           <td>{employee.name}</td>
           <td>{employee.email}</td>
           <td>{employee.role}</td>
            
          </tr>
          ))}
        </tbody>
    </table>
  );
}

export default Table;