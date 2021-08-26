import React from 'react'

const NewItem = (props) => {  //this is the hash from the items controller#new 
  const { department } = props;
  return (
    <div>
      <h1>New Item</h1>

      <form action={`/departments/${department.id}/items`} method="post">
        <p>Name</p>
        <input name="item[name]" />
        <p>Check Box if on Sale</p>
        <input type="checkbox" name="item[sale]" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewItem