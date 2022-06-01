import { useState } from "react";
import UserContext from "./UserContext";

const key = "wishlist";

const UserState = (props) => {
  const saved = localStorage.getItem(key);
  const [wishList, setWishList] = useState(saved ? JSON.parse(saved) : []);
  const [wishListShown, setWishListShown] = useState(false);

  return (
    <UserContext.Provider
      value={{
        wishList,
        setWishList,
        wishListShown,
        setWishListShown,
      }}
    >
      <div className={wishListShown ? "has-wishlist-open" : ""}>
        {props.children}
      </div>
    </UserContext.Provider>
  );
};

const saveUserState = (wishList, callback) => {
  callback(wishList);
  localStorage.setItem(key, JSON.stringify(wishList));
};

export { saveUserState };
export default UserState;
