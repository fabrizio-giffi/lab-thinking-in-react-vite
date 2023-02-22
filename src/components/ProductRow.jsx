import React from "react";

function ProductRow({ item }) {
  return (
    <tr>
      <td style={{color: item.inStock ? "black" : "red"}} >{item.name}</td>
      <td>{item.price}</td>
    </tr>
  );
}

export default ProductRow;
