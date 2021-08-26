import React from 'react';

export default (props) =>  {
  
    const { items, department } = props;   //takes the items off of the props so you don't have to write props.item props.item
    return (
      <>
      <div>
        <h1>{department.name} Items</h1>
        <a href={`http://localhost:3000/departments/${department.id}/items/new`}>Add item</a>
        <a href={`http://localhost:3000/departments`}>Back</a>
      </div>
        {items.map((item) => (
          <div key={item.id} style={{ backgroundColor:"lightgreen", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
           <h1>{item.name}</h1>
           <h3>{"On sale: "}{item.sale? "Yes!" : "No"}</h3>
            <a href={`http://localhost:3000/departments/${department.id}/items/${item.id}`} style={{padding:"7px"}}>Show Item and Comments. From where? /items/item.id? or items/item.id/comments?</a>
            <a href={`http://localhost:3000/departments/${department.id}/items/${item.id}/edit`}style={{padding:"7px"}}>Edit</a>
            <a href={`http://localhost:3000/departments/${department.id}/items/${item.id}`} data-method="delete">Delete</a>
          </div>
        ))}
      </>
    );
 
}

// TODO For ON SALE - you need to figure out how to get it to show "false" or "true"

// This  is my items page where I need to show all the items of this particular item_id.  It needs to be connected to the item Page.
//This page will show whichever department its connected to. It's a universal page.
// We would want to list the items from this department_id and then each one has it's own item page.  On the item page you'll be able to see the
// item name and sale status, create, edit, and destroy.  That specific item_id will allow you to access its comments so you'll need a link 
//to departments/:department_id/items/:item_id/comments.  The comments page will show ALL the comments for that particular item in that particular department.

