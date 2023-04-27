import React from 'react';
import { useNavigate } from "react-router-dom";
import './BasketHeader.css'

function BasketHeader () {
     let navigate = useNavigate();

    const onBackButtonClickHandler = () => {
        return navigate("/React-Module");
    }
    return (
        <header className="basket__wrapperHeader">
            <nav>
                <button className="basket__bth" onClick={onBackButtonClickHandler}/>
            </nav>
            <h1 className="basket__titelHeader">Корзина с выбранными товарами</h1>
        </header>
    )
};

export default BasketHeader;