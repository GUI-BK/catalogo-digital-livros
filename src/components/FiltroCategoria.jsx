function FiltroCategoria({
    categorias,
    categoriasSelecionadas,
    setCategoriasSelecionadas,
  }) {
    function alterarCategoria(categoria) {
      if (categoriasSelecionadas.includes(categoria)) {
        setCategoriasSelecionadas(
          categoriasSelecionadas.filter((c) => c !== categoria)
        );
      } else {
        setCategoriasSelecionadas([
          ...categoriasSelecionadas,
          categoria,
        ]);
      }
    }
  
    return (
      <div className="categoria-div">
        <h4>Categorias</h4>
  
        {categorias.map((categoria) => (
          <label key={categoria}>
            <input
              type="checkbox"
              checked={categoriasSelecionadas.includes(categoria)}
              onChange={() => alterarCategoria(categoria)}
            />
            {categoria}
          </label>
        ))}
      </div>
    );
  }
  
  export default FiltroCategoria;