const getStoreCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLS = (id) => {
  const cartStringified = JSON.stringify(id);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getStoreCart();
  cart.push(id);
  saveCartToLS(cart);
};

export { addToLS, getStoreCart };
