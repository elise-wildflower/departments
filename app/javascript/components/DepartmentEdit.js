import React from "react";

const DepartmentEdit = (props) => {
  return (
    <div>
      <h1>Edit Department</h1>
      <form action={`/departments/${props.department.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={props.department.name} name="department[name]" />
        <p>Manager</p>
        <input defaultValue={props.department.manager} name="department[manager]" />
        <p>Number of Employees</p>
        <input defaultValue={props.department.num_employees} name="department[num_employees]" />
        <button type="submit">Update</button>
      </form>
      <a href="/">Back</a>
    </div>
  );
};

export default DepartmentEdit;
