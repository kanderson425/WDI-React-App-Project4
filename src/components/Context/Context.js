import React, { Component } from 'react';
import {storeProducts, detailProduct} from '../../data';
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id ===id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    };

    handleAddToCart = (id) => {
        console.log(`Hello from add to cart. Id is ${id}`);
    };

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];

        })
        this.setState(() => {
            return {products: tempProducts };
        });
    };

    componentDidMount() {
        this.setProducts();
    }

    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleAddToCart: this.handleAddToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };