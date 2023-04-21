import './basketPage.css';
import busketItems from '../../busketItems'
import BasketHeader from '../../components/elements/basketHeader/basketHeader';
import BasketCard from '../../components/elements/basketCard/basketCard';
import BasketFooter from '../../components/elements/basketFooter/basketFooter';

function BasketPage () {
    return (
        <diV>
             <div className="basket__wrapper">
                <BasketHeader/>
                <main className="basket__wrapperItems">
                     {busketItems.map(item => {
                            return (
                                <BasketCard 
                                    key={item.id}
                                    url={item.url}
                                    card__title={item.card__title}
                                    card__value={item.card__value}
                                />
                            )
                    })};
                </main>
            </div>
            <BasketFooter/>
        </diV>
       
        
    )
}

export default BasketPage;