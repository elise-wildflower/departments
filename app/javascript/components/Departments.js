// import React from 'react';

// const Departments = (props) => {
//   return (
//     <div>
//       <h1>Departments</h1>
//       {props.departments.map((department) => {
//         return (
//         <div key={department.id} style={{ backgroundColor:"lightblue", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
//           <h1>{department.name}</h1>
//           <h3>{"Manager: "}{department.manager}</h3>
//           <h4>{"Employees: "}{department.num_employees}</h4>
//           </div>
//           );
//       })};
//     </div>
//   );
// };

// export default Departments;

import React from "react";
export default (props) =>  {
  
    const { departments } = props;   //takes the departments off of the props so you don't have to write props.department props.department
    return (
      <>
        <h1>Departments</h1>
        <a href="http://localhost:3000/departments/new">Add Department</a>
        {departments.map((department) => (
          <div key={department.id} style={{ backgroundColor:"lightblue", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
           <h1>{department.name}</h1>
           <h3>{"Manager: "}{department.manager}</h3>
           <h4>{"Employees: "}{department.num_employees}</h4>
            <a href={`http://localhost:3000/departments/${department.id}`} style={{padding:"7px"}}>
              Show
              </a>
            <a href={`http://localhost:3000/departments/${department.id}/edit`}style={{padding:"7px"}}>Edit</a>
            <a
              href={`http://localhost:3000/departments/${department.id}`}
              data-method="delete"
            >
              Delete
            </a>
          </div>
        ))}
      </>
    );
 
}
