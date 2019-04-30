import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import BookList from './components/BookList/BookList'
import data from './data'
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
          books: data,
          cart: []
      }
      this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart(book) {
    console.log(book);
    const cartItem = this.state.cart.find(x => x.id === book.id);
    const newBooks = this.state.books.map(x => {
      if(x.id === book.id) {
        return Object.assign({}, x, {inStock: x.inStock - 1});
      }
      return x;
    });
    !cartItem && this.setState({cart: [...this.state.cart, book]}, () => {
      console.log(newBooks);
      this.setState({books: newBooks})
    }) 
  }

  render() {
    return (
      <div className="App">
        <Nav cart={this.state.cart}/>
        <div className="App-main">
            <BookList
                books={this.state.books}
                handleAddToCart={this.handleAddToCart}
            />
        </div>
      </div>
    );
  }
}

export default App;
