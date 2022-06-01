import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Icon from "../Icon";

const Header = () => {
  const { wishList, wishListShown, setWishListShown } = useContext(UserContext);

  // calculate amount of products in wish list
  const wishListAmount = wishList.reduce((prev, curr) => prev + curr.amount, 0);

  const onClickWishListToggle = () => {
    setWishListShown(!wishListShown);
  };

  return (
    <header className="o-page-header">
      <div className="o-page-header__logo">
        <img src="/img/logo.svg" alt="Logo" />
      </div>
      <button
        className="o-page-header__wishlist-toggle"
        aria-controls="wishlist"
        onClick={onClickWishListToggle}
      >
        {wishListShown ? <Icon icon="cancel" /> : <Icon icon="view_headline" />}
        <span className="u-visually-hidden">Toggle wishlist</span>
        <span className="o-amount-indicator">
          {wishListAmount}
          <span className="u-visually-hidden">items in cart</span>
        </span>
      </button>
    </header>
  );
};

export default Header;
