import React, { Component } from 'react';

import './BookIten.css';

class BookItem extends Component {
    render() {
        const book = this.props.book;
        return (
            <div className="BookItem">
                <div className="BookItem__img"
                    style={{
                        backgroundImage: `url(${book.image})`,
                        width: '800px',
                        height: 300,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top left'
                    }}
                >
                    <img
                        src={book.image}
                        alt="Book Item"
                    />
                </div>
                <div className="BookItem__details">
                    <div className="BookItem__cat">
                        {book.category}
                    </div>
                    <h4>{book.title}</h4>
                    <h5>{book.author}</h5>
                    <div className="BookItem__price-cart">
                        <p>${book.price}</p>
                        <button
                            onClick={this.props.handleClick.bind(this, book)}
                        ><span className="fa fa-cart-plus"></span> Buy</button>
                    </div>
                    <div className="BootItem__description">
                        {book.description}
                    </div>
                    <div className="BookItem__stock" style={{color: book.inStock >= 5 ? '#417505' : '#CE0814'}}>
                        {book.inStock} In Stock
                    </div>
                </div>
            </div>
        );
    }
}

export default BookItem;