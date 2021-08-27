import React from 'react'

const NewComment = (props) => {  //this is the hash from the items controller#new 
  const { item } = props;
  return (
    <div>
      <h1>New Comment</h1>

      <form action={`/items/${item.id}/comments`} method="post">
        <p>Title</p>
        <input name="comment[title]"/>
        <p>Comment</p>
        <input name="comment[body]"/>
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewComment