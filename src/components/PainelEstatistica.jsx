function PainelEstatistica({categoriasCadastradas, livrosCadastrados}){
    return(
        <div className="painel-estatistica">
            <div>
                <h2>{livrosCadastrados}</h2>
                <span>Livros Cadastrados</span>
            </div>
            <div>
            <h2>{categoriasCadastradas}</h2>
            <span>Categorias Cadastradas</span>
            </div>
        </div>
    )
}
export default PainelEstatistica