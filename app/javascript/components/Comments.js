import React from 'react'

const Comments = (props) => {


  const { item, comments } = props;   //takes the items off of the props so you don't have to write props.item props.item
  return (
    <>
    <div>
      <h1>{item.name}</h1>
      {/* <a href={`http://localhost:3000/departments/${department.id}/items/new`}>Add item</a>
      <a href={`http://localhost:3000/departments`}>Back</a>
    </div>
      {items.map((item) => (
        <div key={item.id} style={{ backgroundColor:"lightgreen", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
         <h1>{item.name}</h1>
         <h3>{"On sale: "}{item.sale? "Yes!" : "No"}</h3>
          <a href={`http://localhost:3000/items/${item.id}/comments`} style={{padding:"7px"}}>Show Item with Comments/items/:item_id/comments</a>
          <a href={`http://localhost:3000/departments/${department.id}/items/${item.id}/edit`}style={{padding:"7px"}}>Edit</a>
          <a href={`http://localhost:3000/departments/${department.id}/items/${item.id}`} data-method="delete">Delete</a> */}
        </div>
        </>
      );
};

  export default Comments
