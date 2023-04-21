import './basketHeader.css'

function BasketHeader () {
    return (
        <header className="basket__wrapperHeader">
            <nav>
                <button className="basket__bth"></button>
            </nav>
            <h1 className="basket__titelHeader">Корзина с выбранными товарами</h1>
        </header>
    )
};

export default BasketHeader;