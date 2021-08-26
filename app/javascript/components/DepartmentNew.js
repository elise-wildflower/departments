import React from 'react';

const DepartmentNew = () => {
  return (
    <div>
      <p>Form Here</p>
      <form action='/departments' method="post"> 
        <p>Name</p>
        <input name='department[name]'/>
        <p>Manager</p>
        <input name='department[manager]' />
        <p>Number of Employees</p>
        <input name='department[num_employees]'/>
        <button type="submit">Add</button>
      </form>
      <a href="/">Back</a>
    </div>
  );
};

export default DepartmentNew

