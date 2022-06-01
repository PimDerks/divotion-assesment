import React, { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import UserContext, {
  increaseProductAmountInWishList,
  decreaseProductAmountInWishList,
  removeProductFromWishList,
} from "../../context/UserContext";
import { saveUserState } from "../../context/UserState";
import WishListItem from "../WishListItem";
import Icon from "../Icon";

const WishList = () => {
  const { wishList, setWishList } = useContext(UserContext);
  const { wishListShown, setWishListShown } = useContext(UserContext);
  const { products } = useContext(StoreContext);

  const onToggleWishList = () => {
    setWishListShown(!wishListShown);
  };

  const updateWishList = (wishList) => {
    saveUserState(wishList, setWishList);
  };

  const onIncrease = (wishList, product) => {
    updateWishList(increaseProductAmountInWishList(wishList, product));
  };

  const onDecrease = (wishList, product) => {
    updateWishList(decreaseProductAmountInWishList(wishList, product));
  };

  const onRemove = (wishList, product) => {
    updateWishList(removeProductFromWishList(wishList, product));
  };

  // filter items from wishlist which are no longer in api response
  const filteredWishList = wishList.filter((p) => {
    return products.filter((pr) => {
      return pr.id === p.id;
    }).length;
  });

  // calculate amount of products in wish list
  const amount = filteredWishList.reduce((prev, curr) => prev + curr.amount, 0);

  return (
    <section
      id="wishlist"
      className="o-wishlist"
      aria-expanded={wishListShown ? "true" : "false"}
    >
      <h2 className="u-heading-gamma">
        Wishlist
        <div className="o-amount-indicator">
          {amount}
          <span className="u-visually-hidden">items in cart</span>
        </div>
      </h2>
      <button
        onClick={onToggleWishList}
        className="a-button a-button--action o-wishlist__toggle"
      >
        <Icon icon="cancel" />
        <span className="u-visually-hidden">Close wishlist</span>
      </button>
      <ul className="a-list-bare o-wishlist-items">
        {filteredWishList.map((p) => {
          const product = products.filter((prod) => p.id === prod.id)[0];
          return (
            <li className="o-wishlist-items__item" key={p.id}>
              <WishListItem
                onIncrease={() => onIncrease(wishList, p)}
                onDecrease={() => onDecrease(wishList, p)}
                onRemove={() => onRemove(wishList, p)}
                product={product}
                amount={p.amount}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WishList;
