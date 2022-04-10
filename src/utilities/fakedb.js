// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = {};

  const getCart = localStorage.getItem("shopping-cart");
  if (getCart) {
    shoppingCart = JSON.parse(getCart);
  }
  const quantity = shoppingCart[id];
  if(quantity){
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
  }
  else{
      shoppingCart[id]=1;
  }
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
};

const storCard = () => {
  let getCard = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storCard) {
    getCard = JSON.parse(storedCart);
  }
  return getCard;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, storCard, removeFromDb, deleteShoppingCart };
