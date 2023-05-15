import React from 'react';

import { useSelector } from 'react-redux';

import BasketHeader from '../../components/basket/BasketHeader/BasketHeader';
import BasketCard from '../../components/basket/BasketCard/BasketCard';
import BasketFooter from '../../components/basket/BasketFooter/BasketFooter';

import './BasketPage.css';

function BasketPage () {

    const productList = useSelector( ({ productSlice }) => productSlice.list)
 
    return (
        <div>
             <div className="basket__wrapper">
                <BasketHeader/>
                <main className="basket__wrapperItems">
                    {!productList.length && <h2 className='basket__title'>Ваша корзина пуста</h2>}
                     {productList.map(item => {
                            return (
                                <BasketCard 
                                    key={item.id}
                                    id={item.id}
                                    url={item.url}
                                    title={item.title}
                                    price={item.price}/>
                            )
                    })};
                </main>
            </div>
            <BasketFooter/>
        </div>
       
        
    )
}

export default BasketPage;