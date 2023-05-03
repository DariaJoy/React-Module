import React, {useState} from 'react';

import ProductHeader from '../../components/products/ProductHeader/ProductHeader';
import ProductCard from '../../components/products/ProductCard/ProductCard';

import products from '../../data/products'
import './ProductsPage.css' 


function ProductsPage () {
const [amountPrice, setAmountPrice] = useState(calcAmountPrice());

const onAddProductToCart = () => {
    setAmountPrice(calcAmountPrice())
}

function calcAmountPrice() {
    const productsPriceInCart = JSON.parse(localStorage.getItem('cart')) || [];
    return productsPriceInCart.reduce((sum, {price}) => sum + price, 0)
}
    
return (
        <div className="wrapper">
           
            <ProductHeader
                amountPrice={amountPrice}/>
    
            <main className="wrapper__products">
                {products.map(item => {
                    return (
                        <ProductCard 
                            key={item.id}
                            id={item.id}
                            url={item.url}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            weight={item.weight}
                            onAdd={onAddProductToCart}/>
                    )
                })}
            </main>
            
        </div>
    )
}

export default ProductsPage;