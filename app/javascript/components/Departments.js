import React from "react";
export default (props) =>  {
  
    const { departments } = props;   //takes the departments off of the props so you don't have to write props.department props.department
    return (
      <>
        <h1>Video Game Department Stores</h1>
        <a href="http://localhost:3000/departments/new">Add Department</a>
        {departments.map((department) => (
          <div key={department.id} style={{ backgroundColor:"powderblue", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
           <h1>{department.name}</h1>
           <h3>{"Manager: "}{department.manager}</h3>
           <h4>{"Employees: "}{department.num_employees}</h4>
            <a href={`http://localhost:3000/departments/${department.id}/items`} style={{padding:"7px"}}>Store's Items</a>
            <a href={`http://localhost:3000/departments/${department.id}/edit`}style={{padding:"7px"}}>Edit</a>
            <a href={`http://localhost:3000/departments/${department.id}`} data-method="delete"> Delete</a>
          </div>
        ))}
      </>
    );
 
}
