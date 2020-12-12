import React, { useEffect, useState, createContext } from 'react';
import { authConfig } from './config';

import loader from '../images/loader.gif';
import './styles.css';


export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;
    const [usuario, setUsuario] = useState(null);
    const [aguardando, setAguardando] = useState(true);

    useEffect(() => {
        authConfig.auth().onAuthStateChanged((user) => {
            setUsuario(user);
            setAguardando(false);
        });
    }, []);

    if (aguardando) {
        return <img src={ loader } alt="Carregando..." className="loading"/>;
    }

    return (
    <AuthContext.Provider value={{ usuario }}>{children}</AuthContext.Provider>
    );
};