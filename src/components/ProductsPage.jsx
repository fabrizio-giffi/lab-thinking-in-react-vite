import React from "react";
import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        check={check}
        setCheck={setCheck}
      />
      <ProductTable products={products} query={query} check={check} />
    </div>
  );
}

export default ProductsPage;
