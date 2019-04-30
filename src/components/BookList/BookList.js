import React, { Component } from 'react';

import BookItem from '../BookItem/BookItem'
import './BookList.css';

class BookList extends Component {
    constructor(props) {
        super(props)
        this.renderBookItems = this.renderBookItems.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(book) {
        this.props.handleAddToCart(book)
    }

    renderBookItems(book) {
        return (
            <div className="col-md-6" key={book.id}>
            <BookItem
                book={book}
                handleClick={this.handleClick}
            ></BookItem>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.props.books.map(this.renderBookItems)}
            </div>
        );
    }
}

export default BookList;