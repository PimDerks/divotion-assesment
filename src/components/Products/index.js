import React, { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import Product from "../Product";

const Products = () => {
  const { products } = useContext(StoreContext);

  return (
    <div className="wrapper">
      <ul className="m-layout m-layout--wide u-group a-list-bare">
        {products.reverse().map((p) => {
          return (
            <li key={p.id} className="m-layout__column u-1/1 u-1/2@s u-1/3@l">
              <div className="m-layout__item">
                <Product product={p} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
