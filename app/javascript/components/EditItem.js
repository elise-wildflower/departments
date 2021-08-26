import React from 'react'

const EditItem = (props) => {  //this is the hash from the items controller#new 
  const { department, item } = props;
  return (
    <div>
      <h1>Edit Item</h1>

      <form action={`/departments/${department.id}/items/${item.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={item.name} name="item[name]" />
        <p>Sale?</p>
        <input defaultValue={item.sale} name="item[sale]" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default EditItem

