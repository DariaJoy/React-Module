import './card.css';

function CardProduct ({url, card__title, card__description, card__value, card__valueSpan}) {
    return(
        <section className="card">
            <div className="card__wrapper">
            <img className="card__image" src={url} alt=""/>
            <h2 className="card__title">{card__title}</h2>
            <p className="card__description">{card__description}</p>
            <div className="card__nav">
                <p className="card__value">{card__value} <span>{card__valueSpan}</span></p>
                <button className="card__add"></button>
            </div>
            </div>
        </section>
    )
}

export default CardProduct;

