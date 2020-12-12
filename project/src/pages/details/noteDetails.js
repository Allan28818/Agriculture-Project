import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles/note-details.css';

export default class NoteDetails extends Component {
    state = {
        note: {},
        localization: []
    }
   
    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/notes/${id}`)

        this.setState({ note: response.data });
        this.setState({localization: response.data.maping});
        console.log(response);
        console.log(this.state.note);     
     
    }


    //Filtros para os componentes da aplicação:
    FilterName = () => {
        const {note} = this.state;
        const { name } = note;
        
        if(name === null || name === undefined)
        {
            return <p className="name-rest"><font className="name-error">usuário anônimo</font> relatou que:</p>
        }     
        else if( name === "" || name==="  " ||name=== "   " ) {
            return <p className="name-rest"><font className="name-error">usuário anônimo</font> relatou que:</p>
        } 
        else 
        {
            return <p className="name-rest"><b className="name-ok">{name}</b> relatou que:</p>
        }
    }

    FilterGainsAndLosses = () => {
        const {note} = this.state;
        const { gains_and_losses } = note;

        if(gains_and_losses < 0) {
            return <p className="losses">O prejuízo estimado será de R$ {gains_and_losses} :(</p>
        } 
        
        else if ( gains_and_losses === null|| gains_and_losses === undefined) {
            return <p className="any-gains-losses">Não foi inforamada nenhuma estimativa sobre os ganhos e/ou perdas da lavoura!</p>
        } 
        
        else if (gains_and_losses >= 1) {
            return <p className="gains">O a ganho estimado será de R${gains_and_losses} :)</p>
        }

        else if(gains_and_losses === 0) {
            return  <p className="low">Não há um valor considerável de estimativas!</p>
        }

    }

    FilterSize = () => {
        const { note } = this.state;
        const { size }  = note;
        const hectare = size / 10000;

        if(size === null || size === undefined || size <= 0) {
            return <p className="any-size">Tamanho não definido</p>
        }
        else if ( size < 0) {
            return <p className="invalid-size">Tamanho é inválido</p>
        } 
        else if ( size >= 1) {
            return <p className="ok-size">O espaço que a lavoura ocupa em metros quadrados é {size}m², o que dá aproximadamente {hectare} hectare(s).</p>
        }
    }

    FilterDistance = () => {
        const { note } = this.state;
        const { distance } = note;
        const hectare = distance / 10000;

        if(distance === "" || distance === null || distance === undefined) {
            return <p className="any-distance">A distâmcia não foi informada!</p>
        }
        else if (distance < 0) {
            return <p className="invalid-distance">A distância inserida é inválida!</p>
        }
        else if(distance >= 1) {
            return <p className="ok-distance">A distâcia percorrida (em metros quadrados) durante a coleta de dados foi de aproximadamente {distance}Km², o que dá aproximadamente {hectare} hectare(s).</p>
        }

    }

   

    render() {
        const {note} = this.state;
        return(
            <div className="all-detail">
                <Link to="/notes" className="back">Voltar</Link>
                <article className="note-detail">
                    
                    <h1 className="note-detail-title">{note.title}</h1>
                    <this.FilterName/>
                    <p className="note-detail-description">{note.description}</p>
                    <div className="note-detail-type">O tipo da plantação é de <b>{note.plantation_type}</b>. <this.FilterSize /></div>
                    <h5 className="note-detail-pests-rel">As pragas encontradas foram:</h5>
                    <p className="note-detail-pests">{note.pests}</p>
                    <h4 className="note-detail-estimates">As estimativas são as seguintes:</h4>
                    <this.FilterGainsAndLosses />
                    <this.FilterDistance />
                    <p className="note-detail-data">{note.date}</p>
                    <p className="note-detail-localization">Essa coleta de dados foi feita numa lavoura no país {note.Country}, no estado (ou distrito) de {note.State}, na cidade de {note.City}.</p>
                </article>
            </div>
        );
    }
}
