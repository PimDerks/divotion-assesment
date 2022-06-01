import React from "react";
import Icon from "../Icon";

const WishListItem = (props) => {
  const { onIncrease, onDecrease, onRemove, product, amount } = props;
  const { title, img, format } = product;

  return (
    <div className="o-wishlist-item">
      <dl className="o-wishlist-item__details">
        <dt className="u-visually-hidden">Image</dt>
        <dd>
          <img src={img} alt={title} className="o-wishlist-item__image" />
        </dd>
        <dt className="u-visually-hidden">Title</dt>
        <dd>{title}</dd>
        {format && (
          <>
            <dt className="u-visually-hidden">Format</dt>
            <dd className="u-dimmed">{format}</dd>
          </>
        )}
        <dt className="u-visually-hidden">Amount</dt>
        <dd>
          <div className="o-wishlist-item__amount o-amount-indicator o-amount-indicator--small">
            {amount}
          </div>
        </dd>
      </dl>
      <div className="o-wishlist-item__actions m-button-list">
        <button
          onClick={onIncrease}
          className="a-button a-button--action m-button-list__button"
          type="button"
        >
          <Icon icon="add_circle" />
          <span className="u-visually-hidden">Increase amount</span>
        </button>
        <button
          onClick={onDecrease}
          className="a-button a-button--action m-button-list__button "
          type="button"
        >
          <Icon icon="remove_circle" />
          <span className="u-visually-hidden">Decrease amount</span>
        </button>
        <button
          onClick={onRemove}
          className="a-button a-button--action m-button-list__button "
          type="button"
        >
          <Icon icon="cancel" />
          <span className="u-visually-hidden">Remove item</span>
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
