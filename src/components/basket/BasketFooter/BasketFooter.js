import React from 'react';

import { useSelector} from 'react-redux';

import './BasketFooter.css'

function BasketFooter () {
    
    const amountPrice = useSelector(({productSlice}) => productSlice.amountPrice);
    
    return (
        <footer className="basket__footer">
            <div className="basket__footerWrapper">
                <div className="basket__footerNav">
                    <h2 className="basket__footerTitle">Заказ на сумму:</h2>
                    <p className="basket__footerPrice">{amountPrice} ₽</p>
                </div>
                <button className="basket__footerBtn">Оформить заказ</button>
            </div>
        </footer>
    )
}

export default BasketFooter;