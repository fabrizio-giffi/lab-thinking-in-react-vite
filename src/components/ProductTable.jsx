import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ products, query, check }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((item) =>
              item.name.toLowerCase().startsWith(query.toLowerCase())
            )
            .filter((item) => (check ? item.inStock : item))
            .map((item) => {
              return <ProductRow key={item.id} item={item} />;
            })}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;
