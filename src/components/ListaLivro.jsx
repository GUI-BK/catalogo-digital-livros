    import CardLivro from './CardLivro.jsx'

function ListaLivro({ livrosFiltrados }) {
    return(
    <>
    <h2>Itens encontrados ({livrosFiltrados.length})</h2>

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
export default ListaLivro