import './productsPage.css' 
import Header from '../../components/elements/header/header';
import CardProduct from "../../components/elements/card/card";

import products from '../../products.js'

function ProductsPage () {
    return (
        <div className="wrapper">
           
            <Header />
    
            <main className="wrapper__products">
                {products.map(item => {
                    return (
                        <CardProduct 
                            key={item.id}
                            url={item.url}
                            card__title={item.card__title}
                            card__description={item.card__description}
                            card__value={item.card__value}
                            card__valueSpan={item.card__valueSpan}
                            />
                    )
                })}
            
            {/* <CardProduct 
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
            /> */}

            </main>
            
        </div>
    )
}

export default ProductsPage;