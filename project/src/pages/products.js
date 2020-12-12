import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';

import "./styles/products.css";

export default class Products extends Component {

    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/products");
        const resume = response.data;


        this.setState({ products: resume});
        
        console.log(resume);
    }

    Element = () => {
        if(this.state.products.length === 0) {
            return (
                <div>
                   <h1 className="any">Infelizmente não extistem produtos diponíveis neste momento!</h1>
                   <p className="justify">
                       Caso queira anunciar algum produto basta clicar <Link to="/create/products" className="here">aqui</Link> para 
                       anunciá-lo.
                   </p>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className="ok">Veja abaixo os melhores produtos para a sua plantação</h1>
                </div>
            );
        }
    }



    render() {
        const { products } = this.state;


        return (
            <div>
                <Link to="/" className="back">Voltar</Link>
                <this.Element />
                <h5 className="nong-desc">NONG agricultura de precisão</h5>
                
                {
                    products.reverse(),
                    products.map(product =>
                        <article key={product._id} className="product-el">
                            <img src={product.img_url} alt={product.title} className="product-img"/>
                            <h1 className="product-title">{product.title}</h1>,
                            <p className="product-description">{product.description}</p>
                            <h3 className="price">Preço: R$ <font className="cost">{product.price}</font></h3>

                            <Link to={`/products/details/${product._id}`} id="more">Ver mais</Link>    
                        </article>
                    )
                }

                <h6 className="advice">
                    Nós não nos responsabilizamos por qualquer eventualidade durante a transação em nosso site, a plataforma é
                    apenas um intermédio entre o comprador e o vendedor
                </h6>
            </div>
        );
    }
}