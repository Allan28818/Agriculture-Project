import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import img from '../../images/whatsapp.ico';

import './styles/product-details.css';


export default class ProductDetails extends Component {
    state = {
        product: []
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
        console.log(this.state.product);

       
    }

    //Filtros
    FilterImage = () => {
        const { product } = this.state;
        

        if(product.img_url === null || product.img_url === undefined || product.img_url === "") {
            return(
                <div>
                    <img src="https://static.wixstatic.com/media/78bd92_ddfa3092a19d4de08bb419770ba95313~mv2_d_3508_2482_s_4_2.jpg/v1/fit/w_2500,h_1330,al_c/78bd92_ddfa3092a19d4de08bb419770ba95313~mv2_d_3508_2482_s_4_2.jpg" 
                    alt="NONG agricultura de precisão."
                    className="error-img-product"
                    />
                </div>
            )
        } else {
            return(
                <div>
                    <img src={product.img_url} alt={product.title}
                    className="ok-img-product"
                    />
                </div>
            )
        }
    }

    

    render() {
        const { product } = this.state;

        return(
            <div className="all-detail">
                <Link to="/products" className="back">Voltar</Link>
                <article className="product-detail">
                    <this.FilterImage />
                    <hr className="line"/>
                    <h1 className="product-details-title">{ product.title }</h1>
                    <h3 className="salesman-desc">{product.name}, está vendendo {product.title} por R${product.price}, em {product.maping}</h3>
                    <p className="product-detail-description">{ product.description }</p>
                    <ul className="list">
                        <li className="salesman-name">Vendedor(a): {product.name};</li>
                        <li className="product-detail-loc">Local: {product.maping};</li>
                        <li className="price-detail">Preço: R${product.price};</li>
                    </ul>

                    <p className="individual-contact">Contato de {product.name} é ({product.DDD}) {product.contact}.</p>
                 
                        <a href={`https://api.whatsapp.com/send?${product.DDI}${product.DDD}${product.contact}
                        &text=Olá%20${product.name}%20queria%20saber%20mais%20sobre%20o%20produto%20${product.title}%20que%20você%20está%20anunciando.`}
                        target="_blank"
                        className="api-link"
                        >
                            <img src={img} alt="Whatsapp" className="img-button"/>
                            Whatsapp
                        </a>
                    
                </article>
            </div>
        );
    }
}

