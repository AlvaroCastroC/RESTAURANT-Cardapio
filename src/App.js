import './App.css';
import Header from './Header';
import Cards from './Cards';
import React, {useState} from 'react';
import { retornarProdutos, buscarListaProdutos, filtroListaProdutos } from './Serviços/index';


function App() {

  const [listaProdutos, setListaProdutos] = useState(retornarProdutos());
  const [textoBusca, setTextoBusca] = useState("");


  const limparFiltro = () => {
    setListaProdutos(retornarProdutos());
    setTextoBusca("");
  };

  const filtragemProdutos = (prop) => {
    setListaProdutos (filtroListaProdutos(prop));
    setTextoBusca("");
  };

  const buscagemProdutos = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListaProdutos(buscarListaProdutos(textoDigitado));
  
  };


  return (
    <div className="body">
      <Header />
      <div className='main container-limite'>
        <div className='pesquisa-filtro'>

          <div className='container-botoes'>
            
            <button onClick={() => filtragemProdutos("Entradas")}>
              <img src='Assets/entrada.png' alt="Ícone"/>
              <p>Entradas</p></button>
            
            <button onClick={() => filtragemProdutos("Bebidas")}>
              <img src='Assets/bebidas.png' alt="Ícone"/>
              <p>Bebidas</p></button>

            <button onClick={() => filtragemProdutos("Carnes")}>
              <img src='Assets/carne.png' alt="Ícone"/>
              <p>Carnes</p></button>

            <button onClick={() => filtragemProdutos("Massas")}>
              <img src='Assets/massa.png' alt="Ícone"/>
              <p>Massas</p></button>

            <button onClick={() => filtragemProdutos("Saladas")}>
              <img src="Assets/salada.png" alt="Ícone"/>
              <p>Saladas</p></button>

            <button onClick={() => filtragemProdutos("Sobremesas")}>
              <img src='Assets/sobremesa.png' alt="Ícone"/>
              <p>Sobremesas</p></button>

            <button onClick={limparFiltro}>
              <p>limpar filtro</p></button>
          </div>

          <div className='container-busca'>

            <img src="Assets/lupa.png" alt="Ícone"/>
            <input type='text'
            value={textoBusca} 
            placeholder='Pesquise aqui um dos pratos do nosso cardápio'
            onChange={(event) => buscagemProdutos(event.target.value) } />
        
          </div>

          <h2>Cardápio</h2>
          <div className="container-cards">
            {
            listaProdutos.map((produto) => (
            
              <Cards 
              key={produto.id}
              nome={produto.nome}
              imagem={produto.imagem}
              categoria={produto.categoria}
              preco={produto.preco}
              descricao={produto.descricao}
              />
            ) )
          }
        </div>

        </div>

      </div>
  
    </div>
  );
}

export default App;
