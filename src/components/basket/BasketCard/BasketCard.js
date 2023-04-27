import React from 'react';

import './BasketCard.css'

function BasketCard ({id, url, title, price, onRemoveHandler}) {
    const onRemoveFromCartHendler = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updCart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updCart))
        onRemoveHandler(updCart);
    }
    return (
         <section className="basket__card">
            <div className="basket__cardWrapper">
                <img className="basket__cardImage" src={url} alt=""/>
                <h2 className="basket__cardTitle">{title}</h2>
                <div className="basket__cardNav">
                    <p className="basket__cardValue">{price} ₽ </p>
                    <button className="basket__cardRemove" onClick={onRemoveFromCartHendler}/>
                </div>
            </div>
        </section>
    )
};

export default BasketCard;