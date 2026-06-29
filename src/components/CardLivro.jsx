function CardLivro({imagem, titulo, autor, descricao, nota, categoria}) {
    return( <article className="livro-img">
        <img src={imagem} alt={titulo} />
        <div className="card-div">
            <h3>{titulo}</h3>
            <h5>{autor}</h5>
            <span>{categoria}</span>
            <p>{descricao}</p>
            <span>{nota}</span>
        </div>
    </article>
    )
}
export default CardLivro