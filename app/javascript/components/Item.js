import React from 'react'

const Item = (props) => {
  const { item comments } = props;
    return (
      <div> 
      <h1>Item and Comments</h1>
      </div>
    )
//   const renderComments = () => {
//     return comments.map((comment => {
//       return (
//         <div>
//           <h1>{comment.title}</h1>
//         </div>
//       );
//     }));
//   };
//   return (
//     <div>
//       <h1>{item.name}</h1>
//       <a href={`/items/${item.id}/comments/new`}
//       {renderComments()}
//     </div>
//   );
// };

export default Item;


// HE HAS CODE ON THIS:  Just do it so if it's on sale it's red and not sale is black.
// return flagged ? "red" : "black"; 

//div style on the sale part is color: item.sale ? "red" : "black"