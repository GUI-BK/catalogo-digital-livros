import { useState } from 'react'

import data from './data/livros.json'
import CampoBusca from './components/CampoBusca.jsx'
import FiltroCategoria from './components/FiltroCategoria.jsx'
import FiltroStatus from './components/FiltroStatus.jsx'
import ListaLivro from './components/ListaLivro.jsx'
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
  
        <hr />
      
       <ListaLivro
       livrosFiltrados={livrosFiltrados}
       />
      </div>
    );
  }
export default App
