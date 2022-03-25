// use local storage to manage cart data
const addToDb = id => {
    let getCard = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storCard) {
       getCard = JSON.parse(storedCart);
    }
    
    const quantity = getCard[id];
    if(quantity){
        const newquantity = quantity + 1;
        getCard[id] = newquantity
    }
        else{
            getCard[id] = 1;
        }
        localStorage.setItem('shopping-cart', JSON.stringify(getCard));

}

const storCard = () => {
    let getCard = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storCard) {
       getCard = JSON.parse(storedCart);
    }
    return(getCard)
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    storCard,
    removeFromDb,
    deleteShoppingCart
}