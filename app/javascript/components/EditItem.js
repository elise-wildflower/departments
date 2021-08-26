import React from 'react'

const EditItem = (props) => {  //this is the hash from the items controller#new 
  const { department item } = props;
  return (
    <div>
      <h1>Edit Item</h1>

      <form action={`/departments/${department.id}/items/${item.id}`} method="p">
        <p>Name</p>
        <input type="hidden" name="_method" value="patch"/>
        <p>Sale true or false:</p>
        <input type="hidden" name="_method" value="patch" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default EditItem

