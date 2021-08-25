import React from 'react';

const Departments = (props) => {
  return (
    <div>
      <h1>Departments</h1>
      {props.departments.map((department) => {
        return (
        <div key={department.id} style={{ backgroundColor:"lightblue", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
          <h1>{department.name}</h1>
          <h3>{"Manager: "}{department.manager}</h3>
          <h4>{"Employees: "}{department.num_employees}</h4>
          </div>
          );
      })};
    </div>
  );
};

export default Departments;