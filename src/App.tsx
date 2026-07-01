import { useState } from 'react'

import data from './data/livros.json'
import CampoBusca from './components/CampoBusca.jsx'
import FiltroCategoria from './components/FiltroCategoria.jsx'
import FiltroStatus from './components/FiltroStatus.jsx'
import ListaLivro from './components/ListaLivro.jsx'
import PainelEstatistica from './components/PainelEstatistica.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import './App.css'

function App() {
    const [valorBusca, setValorBusca] = useState("");
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
    const [statusSelecionados, setStatusSelecionados] = useState([]);

    const categorias = [...new Set(data.map(livro => livro.categoria))];
    const status = [...new Set(data.map(livro => livro.status))];
  
    const livrosFiltrados = data.filter((livro) => {
      const correspondeBusca = livro.titulo
        .toLowerCase()
        .includes(valorBusca.toLowerCase());
  
      const correspondeCategoria =
        categoriasSelecionadas.length === 0 ||
        categoriasSelecionadas.includes(livro.categoria);

      const correspondeStatus =
        statusSelecionados.length === 0 ||
        statusSelecionados.includes(livro.status);
  
      return (
        correspondeBusca &&
        correspondeCategoria &&
        correspondeStatus
      );
    });
  
    return (
      <div className="App">
        <Header/>

        <Hero/>
        
        <PainelEstatistica
        livrosCadastrados={data.length}
        categoriasCadastradas={categorias.length}
        />

        <div className="filtros-barra">
          <CampoBusca
            valor={valorBusca}
            aoAlterar={setValorBusca}
          />

          <FiltroCategoria
            categorias={categorias}
            categoriasSelecionadas={categoriasSelecionadas}
            setCategoriasSelecionadas={setCategoriasSelecionadas}
          />

          <FiltroStatus
            status={status}
            statusSelecionados={statusSelecionados}
            setStatusSelecionados={setStatusSelecionados}
          />
        </div>
  
        <hr />
      
       <ListaLivro
       livrosFiltrados={livrosFiltrados}
       />

       <Footer/>
      </div>
    );
  }
export default App