import React from 'react';


import './styles/Home.css';

export const Inicio = () => {
    return (
        <div className='div'>
            <div className="elements">
                <div id="elements">
                    <h1 className="home">Home</h1>

                    <img src="https://static.wixstatic.com/media/78bd92_c164f316d06543f6860d15a2946f35ab~mv2.png/v1/fill/w_400,h_194,al_c,q_85,usm_0.66_1.00_0.01/Logo%20Branca%20(Fundo%20Transparente).webp"
                    alt= "NONG agricultura de precisão"
                    className="home-img"
                    />

                    <h3 className="txt">
                        Faça as suas anotações de forma prática e de confiança!<br/> NONG agricultura de precisão.
                    </h3>
                </div>
            </div>
        </div>
    );
};
