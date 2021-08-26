import React from 'react';

const Department = (props) => {
  return (
    <div>
      <p>{props.department.name}</p>
      <p>{props.department.manager}</p>
      <p>{props.department.num_employees}</p>
      <a href="/">Departments</a>
    </div>
  );
};

export default Department 

