import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';

import './styles/statistics.css';

export default class Statistics extends Component {

    state = {
        data: [],
        dataInfo: {},
        distance: [],
    }

    componentDidMount() {
        this.loadData();
       }

      loadData = async () => {
        const response = await api.get("/notes");
        const resume = response.data;

        this.setState({ data: resume });
      

        this.state.data.map( el => 
             this.setState({ distance: el.distance })   
        )
      }

      Elements = () => {
        
        const { data } = this.state;
          
        if( data.length === 0) {
            return (
                <div>
                    <h3>Infelizemnte não existem dados suficientes para criar estatísticas</h3>
                </div>
            )
        } 

        else {
            return(
                <p className="info">Estatísticas de rápido acesso</p>
            );
        }
      }


      

    render(){
        const { data } = this.state;

        return (
            <div>
               
               <Link to="/" className="back">Voltar</Link>
                    <h1 className="statistics-title">Estatísticas</h1>
                    <h4 className="descri">
                        Os dados abaixo são listados de acordo com as anotações dos usuários
                    </h4>

                    <this.Elements />
                
                {
                    data.reverse(),
                    data.map(el =>
                    
                    <article key={el._id} className="statistics-el">
                        <h2 className="id">Registro de {el.name}</h2>
                        <p className="localization-list">
                            Distância de {el.distance}Km, em {el.City}
                            ({el.State}, {el.Country}). Pragas encontradas foram:
                        </p>
                        <li className="pests-list">
                            {el.pests}
                        </li>
                    </article>    
                    )
                }
                
            </div>
        )
    }
} 