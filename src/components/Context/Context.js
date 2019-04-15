import React, { Component, createContext } from 'react';
import {storeProducts, detailProduct} from '../../data';
import userService from '../../utils/userService';
const ProductContext = createContext();
const { Consumer, Provider } = ProductContext;

//you name this toplevel component what ever you want
class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        user: {
            name: "",
            email: "",
            password: "",
            cart: [],
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
        },
    };

/*--- Product Context Methods ---*/    
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
        // const userProperties = {...this.state.user}
        this.setState(() => {
            return { 
                products: tempProducts, 
                cart: [...this.state.cart, product],
            }
        }, () => {
            this.addtotals();
        }
        );
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

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.price * product.count;

        this.setState(() => {
            return {
                cart: [...tempCart]
            } 
        }, () => {
            this.addtotals();
        })

    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if(product.count === 0) {
            this.removeItem(id);
        } 
        else {
            product.total = product.price * product.count;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addtotals();
            })
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]

            }
        }, () => {
            this.addtotals();
        })
    }
  
    clearCart = () => {
        this.setState(() => {
            return {
                cart: [],
            }
        }, () => {
            this.setProducts();
            this.addtotals();
        });
    };

    addtotals = () => {
        let subTotal = 0;
        this.state.cart.map(item =>(subTotal += item.total));
        const tempTax = subTotal * 0.10;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total,
        }
        })

    }

    componentDidMount() {
        this.setProducts();
        const user = userService.getUser();
        this.setState({ user })
    }

    /*--- AuthContext Methods ---*/
    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await userService.signup(this.state);
          // Let <App> know a user has signed up!
          this.props.handleSignupOrLogin();
          // Successfully signed up - show Product Page
          this.props.history.push('/');
        } catch (err) {
          // Invalid user data (probably duplicate email)
          this.props.updateMessage(err.message);
        }
        console.log("HandleSubmit is getting HIT");
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
        console.log('The handleLogout method has been hit');
      }

    handleSignupOrLogin = () => {
        this.setState({user: userService.getUser()});
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    render() {
        return (
            <Provider
            value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleAddToCart: this.handleAddToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                isFormInvalid: this.isFormInvalid,
                updateMessage: this.updateMessage,
                handleLogout: this.handleLogout,
                handleSignupOrLogin: this.handleSignupOrLogin,
                history: this.history,
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { ProductProvider, Consumer as ProductConsumer };