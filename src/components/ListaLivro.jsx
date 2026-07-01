import CardLivro from './CardLivro.jsx'
import EmptyState from './EmptyState.jsx'

function ListaLivro({ livrosFiltrados }) {
    if(livrosFiltrados.length == 0){
        return(
           <EmptyState/>
        )
    }else{
    return(
    <>
    <h2>Livros encontrados ({livrosFiltrados.length})</h2>

    <div className="lista-livro"> 
    {livrosFiltrados.map((livro) => (
          <CardLivro
          key={livro.id}
          imagem={''}
          titulo={livro.titulo}
          autor={livro.autor}
          categoria={livro.categoria}
          descricao={livro.descricao}
          nota={livro.nota}

                />
            ))}
        </div>
        </>
        )
    }
}
export default ListaLivro