import React, { Component } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

import './styles/notes.css';

export default class Notes extends Component {
    state = {
        notes: []
    }

    componentDidMount()  {
        this.loadNotes();
    }

    loadNotes = async () => {
        const response = await api.get("/notes");

        this.setState({ notes: response.data});
        
        this.setState({ number: response.data.docs});
    }




    render() {
        const { notes, pests } = this.state;

        return(
            <div>
                <Link to="/" className="back">Voltar</Link>
                <p className="total">Temos no total <font>{notes.length} </font>anotações</p>
                <hr />
                {
                    notes.reverse(),
                    notes.map(element =>
                        <article key={element._id} className="note">
                            <h1 className="title">{ element.title }</h1>
                            <p className="description"> {element.description} </p>
                            <h5 className="extra">Relato feito em {element.Country} na cidade de {element.City}. ({element.State})</h5>
                            <h5 className="pest-txt">Pestes relatadas:</h5>
                            <p className="pests-info">{element.pests}</p>
                            <p className="date">{element.date}</p>


                            <Link to={`/notes/details/${element._id}`} id="more">Ver mais</Link>
                        </article>
                    )
                }



           
            </div>
        );
    }
}


