import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PestsAux extends Component {


    render() {

        return(
            <div>
                <Link to="/" className="back">Voltar</Link>
                <h1 className="introd-pests">Veja os principais causadores de problemas em sua plantação</h1>
                <article className="pests-el">
                <h1 className="pests-title">Helicoverpa armigera</h1>
                    <a href="https://www.koppert.com.br/content/_processed_/b/0/csm_GDR_Helicoverpa_armigera_06248_92258b9d29.jpg">
                        <img src="https://www.koppert.com.br/content/_processed_/b/0/csm_GDR_Helicoverpa_armigera_06248_92258b9d29.jpg" 
                        alt="NONG agricultura de precisão"
                        className="pests-img"
                        />
                    </a>
                    <p className="pests-desc">
                        Causa danos em lavouras de algodão, milho, soja e outros. O ataque começa nas folhas, frutos, 
                        vagem e outros pontos da planta, como flores e sementes.
                    </p>
                </article>


                <article className="pests-el">
                <h1 className="pests-title">Broca do café</h1>
                <a href="https://www.grupocultivar.com.br/ativemanager/uploads/galeria/1fe62-Nova-Imagem.png">
                        <img src="https://www.grupocultivar.com.br/ativemanager/uploads/galeria/1fe62-Nova-Imagem.png" 
                        alt="NONG agricultura de precisão"
                        className="pests-img"
                        />
                    </a>
                    <p className="pests-desc">
                        Comumente, a broca do café ataca grãos perfurando-os e não há como reverter os danos
                        causados. Pode atacar os frutos em diversos estados maduro, verde, passas ou secos
                        ainda úmidos.
                    </p>
                </article>

                <article className="pests-el">
                <h1 className="pests-title">Mofo branco</h1>
                <a href="https://ballagro.com.br/wp-content/uploads/2020/04/1578684563.jpg">
                        <img src="https://ballagro.com.br/wp-content/uploads/2020/04/1578684563.jpg" 
                        alt="NONG agricultura de precisão"
                        className="pests-img"
                        />
                    </a>
                    <p className="pests-desc">
                        É uma doença causada por um fungo, que ataca lavouras como soja e feijão.
                        Se encontram nas sementes que é uma das principais forms de proagação. A
                        ação deste fungo se caracteriza por lesões no tecido da parte superior da planta, onde
                        surgem substâncias brancas semelhantes ao algodão. 
                    </p>
                </article>

                <article className="pests-el">
                <h1 className="pests-title">Conchonilhas</h1>
                <a href="https://www.cnabrasil.org.br/assets/images/noticias/colchonilha_200803_135320.jpg">
                        <img src="https://www.cnabrasil.org.br/assets/images/noticias/colchonilha_200803_135320.jpg" 
                        alt="NONG agricultura de precisão"
                        className="pests-img"
                        />
                    </a>
                    <p className="pests-desc">
                        São seres semelhantes a pequenos pontos amendoados brancos, que atacam folhas brotos caules e
                        ramos. Quando se sente ameaçado solta uma substância na cor carmim que serve como corante nas indústrias
                        alimetícias.
                    </p>
                </article>

            </div>
        )
    }
}
