import { useState, useEffect } from "react";
import StoreContext from "./StoreContext";
const StoreState = (props) => {
  const [products, setProducts] = useState([]);

  // Fetch products on mount
  useEffect(() => {
    fetch("/api/products.json").then((response) =>
      response.json().then((data) => setProducts(data))
    );
  }, []);

  return (
    <StoreContext.Provider value={{ products, setProducts }}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreState;
