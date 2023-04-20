import './header.css';

function Header () {
    return(
        <header className="header__wrapper">
            <h1 className="header__title">наша продукция</h1>
            <nav>
            <p className="header__cartInfo">Ваша корзина пуста</p>
            <button className="header__btn"></button>  
            </nav>
        </header>
        
    )
}

export default Header;