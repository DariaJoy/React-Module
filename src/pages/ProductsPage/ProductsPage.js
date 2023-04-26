import React from 'react';

import ProductHeader from '../../components/products/ProductHeader/ProductHeader';
import ProductCard from '../../components/products/ProductCard/ProductCard';

import products from '../../data/products'
import './ProductsPage.css' 


function ProductsPage () {

    return (
        <div className="wrapper">
           
            <ProductHeader/>
    
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
                            weight={item.weight}/>
                    )
                })}
            </main>
            
        </div>
    )
}

export default ProductsPage;