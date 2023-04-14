import './productsPage.css' 
import Header from '../../components/elements/header/header';
import CardProduct from "../../components/elements/card/card";

function ProductsPage () {
    return (
        <div className="wrapper">
           
            <Header />
    
            <div className="wrapper__products">

            <CardProduct 
            url="/assets/card1.png"
            card__title="Устрицы по рокфеллеровски"
            card__description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
            card__value="2 700 ₽"
            card__valueSpan="/ 500 г."
            />
            <CardProduct 
            url="/assets/card2.png"
            card__title="Свиные ребрышки на гриле с зеленью"
            card__description="Не следует, однако забывать, что реализация намеченных плановых"
            card__value="1 600 ₽"
            card__valueSpan="/ 750 г."
            />
            <CardProduct 
            url="/assets/card3.png"
            card__title="Креветки по-королевски
            в лимонном соке"
            card__description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
            card__value="1 820 ₽"
            card__valueSpan="/ 500 г."
            />
            <CardProduct 
            url="/assets/card1.png"
            card__title="Устрицы по рокфеллеровски"
            card__description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
            card__value="2 700 ₽"
            card__valueSpan="/ 500 г."
            />
            <CardProduct
            url="/assets/card1.png"
            card__title="Устрицы по рокфеллеровски"
            card__description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
            card__value="2 700 ₽"
            card__valueSpan="/ 500 г."
            />
            <CardProduct 
            url="/assets/card2.png"
            card__title="Свиные ребрышки на гриле с зеленью"
            card__description="Не следует, однако забывать, что реализация намеченных плановых"
            card__value="1 600 ₽"
            card__valueSpan="/ 750 г."
            />
            <CardProduct 
            url="/assets/card3.png"
            card__title="Креветки по-королевски
            в лимонном соке"
            card__description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
            card__value="1 820 ₽"
            card__valueSpan="/ 500 г."
            />
            <CardProduct 
            url="/assets/card1.png"
            card__title="Устрицы по рокфеллеровски"
            card__description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
            card__value="2 700 ₽"
            card__valueSpan="/ 500 г."
            />

            </div>
            
        </div>
    )
}

export default ProductsPage;