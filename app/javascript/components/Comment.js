import React from 'react';

const Comment = (props) => {  // What's coming in is this department's specific id and it's params.  It's showing the department's attributes
  return (
    <div> 
      <h1>Comments:</h1>
      <p>{props.item.name}</p>  
      <p>{props.item.comments.title}</p>
      <p>{props.item.comments.body}</p>
      <p><a href={`http://localhost:3000/departments/${props.department.id}/items`}>Department Items</a></p>
      
      <a href="/">Back</a>
       </div>
  );
};

export default Comment 



// this page needs to link to Items Index.  How?  departments/department_id/items

// HE HAS CODE ON THIS:  Just do it so if it's on sale it's red and not sale is black.
// return flagged ? "red" : "black"; 

//div style on the sale part is color: item.sale ? "red" : "black"

//CHOOSE IF YOU WANT THIS HERE OR ON ITEM OR BOTH