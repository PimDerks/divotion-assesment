import { createContext } from "react";

const UserContext = createContext();

const addProductToWishList = (wishList, product) => {
  // check if product already exists in wishlist
  const exists = wishList.filter((p) => {
    return p.id === product.id;
  }).length;

  if (!exists) {
    wishList.push({ id: product.id, amount: 1 });
  }

  const updatedWishList = [...wishList];

  return updatedWishList;
};

const removeProductFromWishList = (wishList, product) => {
  const updatedWishList = wishList.map((p) => {
    if (p.id === product.id) {
      p.amount = 0;
    }
    return p;
  });

  return updatedWishList.filter((p) => p.amount);
};

const increaseProductAmountInWishList = (wishList, product) => {
  const updatedWishList = wishList.map((p) => {
    if (p.id === product.id) {
      p.amount += 1;
    }
    return p;
  });

  return updatedWishList;
};

const decreaseProductAmountInWishList = (wishList, product) => {
  const updatedWishList = wishList.map((p) => {
    if (p.id === product.id && p.amount > 0) {
      p.amount -= 1;
    }
    return p;
  });

  // Filter out products with 0 as amount
  return updatedWishList.filter((p) => p.amount);
};

export default UserContext;

export {
  removeProductFromWishList,
  increaseProductAmountInWishList,
  decreaseProductAmountInWishList,
  addProductToWishList,
};
