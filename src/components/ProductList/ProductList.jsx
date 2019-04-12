import React, { Component } from 'react';
import Product from '../Product/Product';
import Title from '../Title/Title';

import {ProductConsumer} from '../Context/Context';

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                            <div className="row">
                                <ProductConsumer>
                                    {value => {
                                        return value.products.map( product => {
                                            return <Product key ={product.id} 
                                            product={product}/>
                                        }) 
                                    }}
                                </ProductConsumer>
                            </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default ProductList;

/*---Attempt to integtrate Chuck Norris API---*/
// class ProductList extends Component {
//     constructor () {
//         super();
//         this.state = {
//             cnJokes: [],
//         };
//     }

//     componentDidMount() {
//         fetch('http://api.icndb.com/jokes/')
//         .then(results => {
//             return results.json();
//         }).then(data => {
//             let cnJokes = data.results.map((joke) => {
//                 return(
//                     <div key={joke.results}>
//                         <p>{joke.value.joke}</p>
//                     </div>
//                 )
//             })
//             this.setState({cnJokes: cnJokes});
//             console.log("state", this.state.cnJokes);
//         })
//     }



//     render() {
//         return (
//             <React.Fragment>
//                  <div className="py-5">
//                       <div className="container">
//                           <Title name="our" title="products" />
//                             <div className="row">
//                                 <ProductConsumer>
//                                     {this.state.cnJokes}
//                                 </ProductConsumer>
//                             </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }