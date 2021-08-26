import React from 'react'

const NewComment = (props) => {  //this is the hash from the items controller#new 
  const { department } = props;
  return (
    <div>
      <h1>New Comment</h1>

      <form action={`/items/${item.id}/comments`} method="post">
        <p>Name</p>
        <input />
        <p>Sale true or false:</p>
        <input />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewComment