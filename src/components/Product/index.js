import React, { useContext } from "react";
import UserContext, {
  addProductToWishList,
  removeProductFromWishList,
} from "../../context/UserContext";
import Icon from "../Icon";

const Product = (props) => {
  const { wishList, setWishList } = useContext(UserContext);
  const { title, img } = props.product;

  const saveWishList = (wishList) => {
    setWishList(wishList);
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  };

  const onAddToWishList = () => {
    saveWishList(addProductToWishList(wishList, props.product));
  };

  const onRemoveFromWishList = () => {
    saveWishList(removeProductFromWishList(wishList, props.product));
  };

  const matchFromWishList = wishList.filter((p) => p.id === props.product.id);
  const isInWishList = matchFromWishList.length === 1;
  const amount = isInWishList ? matchFromWishList[0].amount : null;

  return (
    <article className="a-card a-card--overlay a-card--hover o-product">
      <div className="a-card__inner">
        <div
          className="a-card__img a-img u-ratio u-ratio--1:1 u-stacked"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <img src={img} alt={title} />
        </div>
      </div>
      <div className="a-card__overlay u-diapositive">
        <div className="a-inner">
          <div className="a-card__title u-heading-delta u-visually-hidden">
            <h2>{title}</h2>
          </div>
          {!isInWishList ? (
            <button
              className="a-button o-product__action"
              type="button"
              onClick={onAddToWishList}
            >
              <Icon icon="favorite" />
              <span className="u-visually-hidden">Add {title} to wishlist</span>
            </button>
          ) : (
            <button
              className="a-button o-product__action"
              type="button"
              onClick={onRemoveFromWishList}
            >
              <Icon icon="favorite_outline" />
              <span className="u-visually-hidden">
                Remove {title} from wishlist
              </span>
            </button>
          )}
        </div>
      </div>
      {amount && (
        <div className="o-product__amount o-amount-indicator o-amount-indicator--small">
          {amount}
        </div>
      )}
    </article>
  );
};

export default Product;
