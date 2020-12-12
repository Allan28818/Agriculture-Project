import React from 'react';
import styled from 'styled-components';


const Ul = styled.ul`
        list-style: none;
        display: flex;
        flex-flow: row nowrap;

        li {
            padding: 18px 10px;

            a {
                color: black;
                text-decoration: none;
            }
        }

        @media (max-width: 768px) {
            flex-flow: column nowrap;
            background-color: #1dfa42ad;
            position: fixed;
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            right: 0;
            height: 100vh;
            width: 300px;
            padding-top: 3.5rem;
            transition: transform 0.3s ease-in-out;

            li {
                a {
                    text-decoration: none;
                }
            }

            @media(max-width: 280px) {
                width: 200px;
                display: block;
                z-index: 1;
            }

            @media(max-width: 320px) {
                width: 200px;
                display: block;
                z-index: 1;
            }
        }
`;

const RightNav = ({ open }) => {
    return (
    
        <Ul open={open}>
            <li><a href="/notes" className="notes">Ver anotações</a></li>
            <li><a href="/plantation-issues" className="pests">Pragas</a></li>
            <li><a href="/statistics" className="statistics">Estatísticas</a></li>
            <li><a href="/products" className="products">Produtos</a></li>
            <li><a href="/create/notes" className="create-note">Criar Nota</a></li>
            <li><a href="/create/products" className="create-products">Anunciar Produto</a></li>
        </Ul>
    )
}

export default RightNav;