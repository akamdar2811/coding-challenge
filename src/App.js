import React, { Component } from 'react';
import * as ProductAPI from './API/productApi';
import ProductList from './components/ProductList/ProductList';
import './App.css';

class App extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    ProductAPI.getProducts()
      .then( response => {
        if (Array.isArray(response.data.groups)) {
          this.setState({products: response.data.groups});
        }
      });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h2 className="title">Home Decor</h2>
        </header>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
