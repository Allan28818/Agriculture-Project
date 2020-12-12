import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { authConfig } from '../auth/config';
import { AuthContext } from '../auth/AuthContext';

import { Link } from 'react-router-dom';

import img from '../images/User_icon_2.svg.png';
import backgroud from '../images/camp.jpg';

import './styles/Login.css';

export const Logar = withRouter(({ history }) => {

    const loginFunc = useCallback(
        async (event) => {
            event.preventDefault();

            const { email, senha } = event.target.elements;

            try {
                await authConfig.auth().signInWithEmailAndPassword(email.value, senha.value);
                history.push('/');
            } catch (error) {
                console.log(error);
            }
        },
        [history]
        );

        const { usuario } = useContext(AuthContext);

        if(usuario) {
            return <Redirect to='/' />;
        }

        return (
            <div className="div">
                <img src={backgroud} className="background"/>
                <div className="login" >
                    <img src={img} className="usuario"/>
                    <h1>Login</h1>
                    <form onSubmit={loginFunc} className="box">
                        <p>e-mail</p>
                        <input type="email" name="email" placeholder="Insira o seu e-mail"/>
                        <p>Senha</p>
                        <input type="password" name="senha" placeholder="Insira a sua senha"/>
                        <button type="submit">Login</button>
                        
                    </form>
                    <div className="div-action">
                        <img  className="btn-img" src = "https://static.wixstatic.com/media/78bd92_c164f316d06543f6860d15a2946f35ab~mv2.png/v1/fill/w_400,h_194,al_c,q_85,usm_0.66_1.00_0.01/Logo%20Branca%20(Fundo%20Transparente).webp" />
                        <Link to="/cadastrar" className="sign-in">Cadastrar</Link>
                    </div>
                </div>
            </div>
        );
});