import React from 'react';

import { useDispatch } from 'react-redux';


import { removeFromCartList } from '../../../store/reducers/products'

import './BasketCard.css'

function BasketCard ({ id, title, url, price }) {
    
    const dispatch = useDispatch()
   
    const onRemove = () => {
        dispatch(removeFromCartList ({ id }));
        removeFromCartList (prevState => !prevState );
    }

    return (
         <section className="basket__card">
            <div className="basket__cardWrapper">
                <img className="basket__cardImage" src={url} alt=""/>
                <h2 className="basket__cardTitle">{title}</h2>
                <div className="basket__cardNav">
                    <p className="basket__cardValue">{price} ₽ </p>
                    <button className="basket__cardRemove" onClick={onRemove}/>
                </div>
            </div>
        </section>
    )
};

export default BasketCard;