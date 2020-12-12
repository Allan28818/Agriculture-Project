import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './styles/Create.css';

export default class CreateNote extends Component {

        state = {
            title: "",
            description: "",
            pests: "",
      
            Country: "",
            State: "",
            City: "",
                
            name: "",
            plantation_type: "",
            size: [],
            distance: [],
            gains_and_losses: [],
            vending: [],
            date: ""

    }


    Post = async () => {
        
        try {
            const res = await axios.post('http://localhost:4000/api/notes', {...this.state})
            alert('A sua anotação foi realizada com sucesso!')
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

        return(
            <div className="all-create">
                <Link to="/" className="back">Voltar</Link>
                <h1 className="create-title">Crie as suas notas</h1>
                

                <div className="wrapper">
                    <div className="input-data">
                        <input name="title" value={this.state.title} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">Título*</label>
                    </div>
                </div>

                                
                <div className="wrapper">
                    <div className="input-data">
                        <input name="description" value={this.state.description} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="desc-create-note">Descrição*</label>
                    </div>
                </div>
                    
                <h3 className="create-pests-desc">
                    Insira no campo abaixo todas as pestes listadas em sua lavoura (caso existam):
                </h3>
                <div className="wrapper">
                    <div className="input-data">
                        <input name="pests" value={this.state.pests} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">Peste</label>
                    </div>
                </div>

                <h4 className="label-create">Insira o seu nome logo abaixo:</h4>
                <div className="wrapper">
                    <div className="input-data">
                        <input name="name" value={this.state.name} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">Seu nome*</label>
                    </div>
                </div>
                
               

                <h4 className="label-create">Insira a data de seu registro abaixo:</h4>
                <div className="wrapper">
                    <div className="input-data">
                        <input name="date" value={this.state.date} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label>Data*</label>
                    </div>
                </div>
                

                <h3 className="label-create">
                    Insira logo abaixo a sua distância percorrida na 
                coleta de dados e o tamanho da lavoura, na qual 
                    os registros foram feitos, em metros quadrados.
                </h3>

                <div className="wrapper">
                    <div className="input-data">
                        <input name="distance" value={this.state.distance} onChange={this.Change} type="number" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">Distância</label>
                    </div>
                </div>
               
                <div className="wrapper">
                    <div className="input-data">
                        <input name="size" value={this.state.size} onChange={this.Change} type="number" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">Tamanho</label>
                    </div>
                </div>
                
                <h4 className="label-create">Qual o tipo da plantação?*</h4>
                <div className="wrapper">
                    <div className="input-data">
                        <input name="plantation_type" value={this.state.plantation_type} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">informe o tipo da plantação:</label>
                    </div>
                </div>
                
                <h3 className="label-create">Insira as suas perspectivas e estimativas do ramo financeiro da sua empresa abaixo</h3>
                <p className="pop">Caso sejam negativos coloque um sinal de subtração na frente (-).</p>

                <div className="wrapper">
                    <div className="input-data">
                        <input name="gains_and_losses" value={this.state.gains_and_losses} onChange={this.Change} type="number" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">Ganhos e perdas</label>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="input-data">
                        <input name="vending" value={this.state.vending} onChange={this.Change} type="number" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">Expectativa de venda</label>
                    </div>
                </div>                
               

                <h3 className="label-create">Insira a sua localização logo abaixo:</h3>
                
                <div className="wrapper">
                    <div className="input-data">
                        <input name="Country" value={this.state.Country} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">País*</label>
                    </div>
                </div>     
               
                <div className="wrapper">
                    <div className="input-data">
                        <input name="State" value={this.state.State} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">Estado*</label>
                    </div>
                </div>     
               
                <div className="wrapper">
                    <div className="input-data">
                        <input className="input-create-note" name="City" value={this.state.City} onChange={this.Change} type="text" autoComplete="off" required/> 
                        <div className="underline"></div>
                        <label className="label-create">Cidade*</label>
                    </div>
                </div>   
               
                <button onClick={this.Post} className="create-button">Enviar</button>

            </div>
        );
    }
}