import React, { useEffect, useState } from 'react';

import BasketHeader from '../../components/basket/BasketHeader/BasketHeader';
import BasketCard from '../../components/basket/BasketCard/BasketCard';
import BasketFooter from '../../components/basket/BasketFooter/BasketFooter';

import './BasketPage.css';

function BasketPage () {
    const [items, setItems] = useState([]);
    const [amountPrice, setAmountPrice] = useState(0);
    
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        setItems(cart)
    }, [])

    useEffect (() => {
        const amountPrice = items.reduce((amountPrice, {price}) => amountPrice + price, 0);
        setAmountPrice(amountPrice)
    }, [items])

    return (
        <diV>
             <div className="basket__wrapper">
                <BasketHeader/>
                <main className="basket__wrapperItems">
                    {!items.length && <h2 className='basket__title'>Ваша корзина пуста</h2>}
                     {items.map(item => {
                            return (
                                <BasketCard 
                                    key={item.id}
                                    id={item.id}
                                    url={item.url}
                                    title={item.title}
                                    price={item.price}
                                    onRemoveHandler={setItems}/>
                            )
                    })};
                </main>
            </div>
            <BasketFooter
                amountPrice={amountPrice}/>
        </diV>
       
        
    )
}

export default BasketPage;