import React from 'react';

import { useNavigate } from "react-router-dom";

import './ProductHeader.css';

function ProductHeader () {
    let navigate = useNavigate();

    const onCartButtonClickHandler = () => {
        return navigate("/cart");
    }

    return(
        <header className="header__wrapper">
            <h1 className="header__title">наша продукция</h1>
            <nav>
                <p className="header__cartInfo">В Вашей корзине товаров на 0 ₽</p>
                <button className="header__btn" onClick={onCartButtonClickHandler}/>
            </nav>
        </header>
        
    )
}

export default ProductHeader;