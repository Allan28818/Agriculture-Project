import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './styles/Create.css';

export default class CreateProduct extends Component {

    state = {
        DDD: "",
        DDI: "",
        contact: "",
        description: "",
        img_url: "",
        maping: "",
        name: "",
        price: "",
        title: ""

    }

    Post = async () => {

        try {
            const res = await axios.post('http://localhost:4000/api/products', {...this.state})
            alert('O seu anúncio de venda está no ar!')
        } 
        
        catch(err) {
            alert('Falha ao criar a sua anotação, favor tentar mais tarde')
            console.log('erro na criação '+err)
        }
    }

      
    Change = (event) => {
        const state = Object.assign({}, this.state);
        const camp = event.target.name;

        state[camp] = event.target.value;
        this.setState(state);
    }


    render() {
        return (
            <div className="all-create">
                <Link to="/" className="back">Voltar</Link>
                <h1 className="create-title">Anuncie aqui o seu produto</h1>
                <h3 className="label-create-top">Os anúncios são para vendas contínuas... agradecemos por escolher NONG!</h3>

                <h2 className="label-create">Preencha os dados abaixo para criar um anúncio</h2>


                <div className="wrapper">
                    <div className="input-data">
                        <input name="title" value={this.state.title} onChange={this.Change} type="text" autoComplete="off" required/>
                        <div className="underline"></div>
                        <label>Título*</label>
                    </div>
                </div>

               
                
                <h4 className="label-create">Insira o seu nome</h4>

                <div className="wrapper">
                    <div className="input-data">
                        <input name="name" value={this.state.name} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label>Nome*</label>
                    </div>
                </div>

                
                <h4 className="label-create">Insira o preço do seu produto</h4>
                <div className="wrapper">
                    <div className="input-data">
                        <input name="price" value={this.state.price} onChange={this.Change} type="number" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label>Preço*</label>
                    </div>
                </div>

                <h4 className="label-create">Insira uma URL para uma foto do seu produto</h4>
                <div className="wrapper">
                    <div className="input-data">
                        <input name="img_url" value={this.state.img_url} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label>URL</label>
                    </div>
                </div>
              
                 <h4 className="label-create">Insira uma descrição*</h4>
                
                 <div className="wrapper">
                    <div className="input-data">
                        <input name="description" value={this.state.description} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label>Descrição*</label>
                    </div>
                </div>
                

                <h4 className="label-create">Insira o seu endereço</h4>
                <div className="wrapper">
                    <div className="input-data">    
                        <input name="maping" value={this.state.maping} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label>Endereço*</label>
                    </div>
                </div>
                
                <h3 className="label-create">Insira os dados do seu melhor número de celular</h3>

                <div className="wrapper">
                    <div className="input-data">    
                         <input name="DDI" value={this.state.DDI} onChange={this.Change} type="text" autoComplete="off" required/> 
                         <div className="underline"></div>
                         <label>Insira o seu DDI, exemplo: Brasil 55*</label>
                    </div>
                </div>
                

                <div className="wrapper">
                    <div className="input-data">    
                        <input name="DDD" value={this.state.DDD} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label>Insira o seu DDD, exemplo: Brasília 61*</label>
                    </div>
                </div>
                
                <div className="wrapper">
                    <div className="input-data">    
                        <input name="contact" value={this.state.contact} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label>Insira o seu número <b>sem</b> o DDD*</label>
                    </div>
                </div>
               
                <button onClick={this.Post} className="create-button">Enviar</button>

                <h6>
                    Nós não nos responsabilizamos por qualquer eventualidade durante a transação em nosso site, a plataforma é
                    apenas um intermédio entre o comprador e o vendedor
                </h6>
            </div>
        );
    }
}