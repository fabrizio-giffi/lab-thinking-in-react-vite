import React from "react";

function ProductRow({ item }) {
  return (
    <tr>
      <td style={{color: item.inStock ? "black" : "firebrick"}} >{item.name}</td>
      <td>{item.price}</td>
    </tr>
  );
}

export default ProductRow;
