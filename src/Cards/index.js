import React from "react";
import './estilo.css';

const Cards = ({nome, imagem, descricao, preco, categoria}) => {
    return (
        <div className="box-cards">
            <div className="cards">
                <div className="container-imagem">
                    <img src={imagem} />
                </div>
                
                <div className="container-texto">
                    <div className="container-descricao">
                    <p className="nome">{nome}</p>
                    <p className="categoria">{categoria}</p>
                    <p className="descricao">{descricao}</p>
                    </div>
                    
                    <div className="container-preco">
                    <p className="preco">R${preco}</p>
                    </div>
                   
                </div>
                
            </div>
        </div>
    );
}

export default Cards;