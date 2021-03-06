import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Allproducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://calm-fjord-73469.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-success text-center">All Courses</p>
                <div className="row g-5">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </>
    );
};

export default Allproducts;