import React from "react";

const DepartmentEdit = (props) => {
  return (
    <div>
      <p>Form here</p>
      <form action={`/departments/${props.department.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={props.department.name} name="department[name]" />
        <p>Manager</p>
        <input defaultValue={props.department.manager} name="department[email]" />
        <p>Number of Employees</p>
        <input defaultValue={props.department.num_employees} name="department[email]" />
        <button type="departmentmit">update</button>
      </form>
      <a href="/">back</a>
    </div>
  );
};

export default DepartmentEdit;

//           <h1>{department.name}</h1>
//           <h3>{"Manager: "}{department.manager}</h3>
//           <h4>{"Employees: "}{department.num_employees}</h4>