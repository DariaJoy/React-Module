import React from 'react';
import './ProductCard.css';

function ProductCard ({id, url, title, description, price, weight, onAdd}) {
     const onAddToCartClickHandler = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = {id, url, title, price}
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        onAdd(); 
    }
    return(
        <section className="card">
            <div className="card__wrapper">
                <img className="card__image" src={url} alt=""/>
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
                <div className="card__nav">
                    <p className="card__value">{price} ₽ <span>/ {weight} г.</span></p>
                    <button className="card__add" onClick={onAddToCartClickHandler}/>
                </div>
            </div>
        </section>
    )
}

export default ProductCard;

