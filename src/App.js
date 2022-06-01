import React from "react";
import "./App.scss";
import UserState from "./context/UserState";
import StoreState from "./context/StoreState";
import Products from "./components/Products";
import WishList from "./components/WishList";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <StoreState>
        <UserState>
          <Header />
          <Hero
            img="http://www.robbyvalentine.nl/images/headers/alliance1.jpg"
            title="Wishlist"
            subtitle="Lorem ipsum dolor sit amet"
          />
          <Products />
          <WishList />
        </UserState>
      </StoreState>
    </div>
  );
};

export default App;
