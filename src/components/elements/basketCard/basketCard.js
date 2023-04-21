import './basketCard.css'

function BasketCard ({url, card__title, card__value}) {
    return (
         <section className="basket__card">
            <div className="basket__cardWrapper">
                <img className="basket__cardImage" src={url} alt=""/>
                <h2 className="basket__cardTitle">{card__title}</h2>
                <div className="basket__cardNav">
                    <p className="basket__cardValue">{card__value} ₽ </p>
                    <button className="basket__cardRemove"></button>
                </div>
            </div>
        </section>
    )
};

export default BasketCard;