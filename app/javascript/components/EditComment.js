import React from 'react'

const EditComment = (props) => {  //this is the hash from the comments controller#new 
  const { item, comment } = props;
  return (
    <div>
      <h1>Edit Comment</h1>

      <form action={`/items/${item.id}/comments/${comment.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={comment.title} name="comment[title]" />
        <p>Comment</p>
        <input defaultValue={comment.body} name="comment[body]" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default EditComment

//prefill the button with a checkmark if the comment is on sale.  So if sale==true

