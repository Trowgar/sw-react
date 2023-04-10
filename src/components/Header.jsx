import React from 'react';
import Logo from '../assets/img/logo.svg';
import Cart from '../assets/img/cart.svg';
import Arrow from '../assets/img/arrow.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper header-content">
                <div className="navbar">
                    <ul className="navbar-list">
                        <li className="navbar-link">
                            <a href="">
                                women
                            </a>
                        </li>
                        <li className="navbar-link">
                            <a href="">
                                men
                            </a>
                        </li>
                        <li className="navbar-link">
                            <a href="">
                                kids
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="logo">
                    <a href="" className="logo-img">
                        <img src={Logo} alt="eCommerce" />
                    </a>
                </div>
                <div className="user-action">
                    <div className="currency-switcher">
                        <span className="currency">$</span>
                        <span className="arrow">
                        <img src={Arrow} alt="Choose a currency"/>
                    </span>
                    </div>
                    <div className="cart">
                        <img src={Cart} alt="Cart" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;