import React from 'react';

import { useNavigate } from "react-router-dom";
import { useSelector} from 'react-redux';

import './ProductHeader.css';

function ProductHeader () {

    const counter = useSelector(({productSlice}) => productSlice.counter)
    const amountPrice = useSelector(({productSlice}) => productSlice.amountPrice);
    
    let navigate = useNavigate();

    const onCartButtonClickHandler = () => {
        return navigate("/cart");
    }

    return(
        <header className="header__wrapper">
            <h1 className="header__title">наша продукция</h1>
            <nav>
                <p className="header__cartInfo">В Вашей корзине {counter} товаров на {amountPrice} ₽</p>
                <button className="header__btn" onClick={onCartButtonClickHandler}/>
            </nav>
        </header>
        
    )
}

export default ProductHeader;