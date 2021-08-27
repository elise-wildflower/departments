import React from 'react'

const Comments = (props) => {

  const { item, comments } = props;   //takes the items off of the props so you don't have to write props.item props.item
  
  return (
    <>
    <div>
      <h1>{item.name}</h1>
      <a href={`http://localhost:3000/items/${item.id}/comments/new`}>Add Comment</a>
      <a href={`/`}>Back to Main</a> 
    </div>

      {comments.map((comment) => (
        <div key={comment.id} style={{ backgroundColor:"lightblue", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
         <h1>{comment.title}</h1>
         <h3>{comment.body}</h3>
          <a href={`http://localhost:3000/items/${item.id}/comments/${comment.id}/edit`}style={{padding:"7px"}}>Edit</a>
          <a href={`http://localhost:3000/items/${item.id}/comments/${comment.id}`} data-method="delete">Delete</a>
          </div>
        ))};
      </>
    );
 
}

  export default Comments

  //Not sure how to get the back button to go to the previous page because I would need the department ID and didn't pass it as props.  Not sure if it's
  //worth passing in the department id