import React from 'react';
import product from '../assets/img/Product D.jpg';
import '../app.scss';

const Content = () => {
    return (
        <div className="content">
            <div className="wrapper">
                <h2 className="category-title">Category name</h2>
                <div className="products">
                    <div className="product-card">
                        <img src={product} alt='item' />
                        <h3>Apollo Running Short</h3>
                        <span>$50.00</span>
                    </div>
                    <div className="product-card">
                        <img src={product} alt='item' />
                        <h3>Apollo Running Short</h3>
                        <span>$50.00</span>
                    </div>
                    <div className="product-card">
                        <img src={product} alt='item' />
                        <h3>Apollo Running Short</h3>
                        <span>$50.00</span>
                    </div>
                    <div className="product-card">
                        <img src={product} alt='item' />
                        <h3>Apollo Running Short</h3>
                        <span>$50.00</span>
                    </div>
                    <div className="product-card">
                        <img src={product} alt='item' />
                        <h3>Apollo Running Short</h3>
                        <span>$50.00</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Content;