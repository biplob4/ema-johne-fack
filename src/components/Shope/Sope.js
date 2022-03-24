import React, { useEffect, useState } from 'react';
import { addToDb, storCard } from '../../utilities/fakedb';
import Product from '../Card/Product';
import Cart from '../Cart/Cart';
import './Shope.css'

const Sope = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCard] = useState([]);

    const addToCard = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => selectedProduct.id === product.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => selectedProduct.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCard(newCart)
        addToDb(selectedProduct.id)
    }

    useEffect(() => {
        let getStorCard = storCard();
        const saveCard = [];
        for (const id in getStorCard) {
            const addedCard = products.find(product => product.id === id);
            if (addedCard) {
                const quantity = getStorCard[id];
                addedCard.quantity = quantity;
                saveCard.push(addedCard)
            }
        }
        setCard(saveCard)
    }, [products])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shope'>
            <div className="cart">
                <Cart card={cart}></Cart>
            </div>
            <div className="product">
                {
                    products.map(product => <Product key={product.id} product={product} addToCard={addToCard}></Product>)
                }
            </div>
        </div>
    );
};

export default Sope;