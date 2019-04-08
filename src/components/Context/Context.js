import React, { Component } from 'react';
import {storeProducts, detailProduct} from '../../data';
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart:[],
        modalOpen: true,
        modalProduct: detailProduct,
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
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product]}
        }, () => {console.log(this.state)})
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

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    };

    closeModal = () => {
        this.setState(() => {
            return{modalOpen: false}
        })
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
                openModal: this.openModal,
                closeModal: this.closeModal,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };