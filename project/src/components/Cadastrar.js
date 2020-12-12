import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { authConfig } from '../auth/config';

import { Link } from 'react-router-dom';

import icon from '../images/farm.png';
import background from '../images/background2.jpg'

import './styles/SignIn.css';

export const Cadastrar = withRouter((props) => {
    const { history } = props;

    const cadastroFunc = useCallback(
        async (event) => {
            event.preventDefault();

            const { email, senha } = event.target.elements;
            try {
                await authConfig.auth().createUserWithEmailAndPassword(email.value, senha.value);

                history.push('/');

            } catch(error) {
                console.log(error);
            }
        },
        [history],
    );

    return (
        <div className="div">
            <img src={background} className="background"/>
            <div className="cadastro">
                
                <img src={icon} className="usuario"/>
                <h1 className="title-cad">Cadastrar</h1>
                <form onSubmit={cadastroFunc}>
                    <p>email</p>
                    <input type="email" name="email" className="email" placeholder="seuemail@gmail.com"/>
                    <p>Senha</p>
                    <input type="password" name="senha" className="password" placeholder="min: 6 caracteres"/>
                    <button type="submit" className="button">Cadastrar</button>
                </form>

                <div className="div-action">
                        <img  className="btn-img" src = "https://static.wixstatic.com/media/78bd92_c164f316d06543f6860d15a2946f35ab~mv2.png/v1/fill/w_400,h_194,al_c,q_85,usm_0.66_1.00_0.01/Logo%20Branca%20(Fundo%20Transparente).webp" />
                        <Link to="/logar" id="login">Login</Link>
                </div>
                
            </div>
        </div>
    )
});