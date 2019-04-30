import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="Nav">

                <div className="Nav-item Nav-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="Nav-item Nav-cart">
                    <span className="fa fa-cart-plus"></span> {this.props.cart.length}
                </div>
            </div>
        );
    }
}

export default Nav;