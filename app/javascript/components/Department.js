import React from 'react';

const Department = (props) => {  // What's coming in is this department's specific id and it's params.  It's showing the department's attributes
  return (
    <div> 
      <h1>Department</h1>
      <p>{props.department.name}</p>  
      <p>{props.department.manager}</p>
      <p>{props.department.num_employees}</p>
      <p><a href={`http://localhost:3000/departments/${props.department.id}/items`}>Department Items</a></p>
      
      <a href="/">Back</a>
    </div>
  );
};

export default Department 


// this page needs to link to Items Index.  How?  departments/department_id/items