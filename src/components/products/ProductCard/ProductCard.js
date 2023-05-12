import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'
import { add, remove } from '../../../store/reducers/products';
import './ProductCard.css';

function ProductCard ({id, url, title, description, price, weight}) {
    const dispatch = useDispatch()
    const [isAdded, setAddState] = useState(false);

    const addToRedux = () => {
        dispatch(add ({ id, title, price }));
        setAddState (prevState => !prevState );
    }

    const removeFromRedux = () => {
        dispatch(remove ({ id }));
        setAddState (prevState => !prevState );
    }

    return(
        <section className="card">
            <div className="card__wrapper">
                <img className="card__image" src={url} alt=""/>
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
                <div className="card__nav">
                    <p className="card__value">{price} ₽ <span>/ {weight} г.</span></p>
                    <button className="card__add" onClick={isAdded ? removeFromRedux : addToRedux}>
                        <FontAwesomeIcon icon={isAdded ? faXmark : faPlus} size="xl" style={{color: "#ffffff"}} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductCard;

