import {produtos} from "../Dados/data-produtos";



export const retornarProdutos = () => {
    return produtos;
};

export  const buscarListaProdutos = (textoDigitado) => {
    return produtos.filter((filtro) => filtro.categoria.toLowerCase().includes(textoDigitado.toLowerCase()) || filtro.nome.toLowerCase().includes(textoDigitado.toLowerCase()) || filtro.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    );
};

export const filtroListaProdutos = (prop) => {
    return produtos.filter((filtro) => filtro.categoria === prop)

  };