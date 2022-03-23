import React from 'react';

const Cart = ({card}) => {
    let shippingTotal = 0;
    let TexTotal = 0;
    let Price = 0;
    let quantity = 0;
    for (const cardSingel of card) {
        shippingTotal = shippingTotal + (cardSingel.shipping * cardSingel.quantity) ;
        TexTotal = TexTotal + (cardSingel.price * 0.1 * cardSingel.quantity);
        quantity = quantity + cardSingel.quantity;
        Price = Price + (cardSingel.price * cardSingel.quantity);
    }
    const grandTotal = Price + shippingTotal + TexTotal;

    return (
        <div>
            <h2>Total added Card</h2>
            <h4>Add To card: <i>${quantity}</i></h4>
            <h4>Price: <i>${Price}</i></h4>
            <h4>Shipping: <i>${shippingTotal}</i></h4>
            <h4>Tex: <i>${TexTotal}</i></h4>
            <h4>Grand Total: <i>${grandTotal}</i></h4>
        </div>
    );
};

export default Cart;