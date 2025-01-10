import { toast } from "react-toastify";

const getStoreCart = () => {
  const storedCartString = localStorage.getItem("read");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLS = (id) => {
  const cartStringified = JSON.stringify(id);
  localStorage.setItem("read", cartStringified);
};

const addToLS = (id) => {
  const read = getStoreCart();
  const isExitis = read.find((rd) => rd == id);
  if (!isExitis) {
    read.push(id);
    toast("Book is added");
  } else {
    toast.warn("Already added");
  }
  saveCartToLS(read);
};

// Wishlist Books

const getStoreWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};

const saveWishlistToLS = (id) => {
  const cartStringfied = JSON.stringify(id);
  localStorage.setItem("wishlist", cartStringfied);
};

const addWishlistToLS = (id) => {
  const wishlist = getStoreWishlist();
  wishlist.push(id);
  saveWishlistToLS(wishlist);
};

export { addToLS, getStoreCart, getStoreWishlist, addWishlistToLS };
