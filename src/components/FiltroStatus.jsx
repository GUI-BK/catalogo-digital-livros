function FiltroStatus({
    status,
    statusSelecionados,
    setStatusSelecionados,
  }) {
    function alterarStatus(valor) {
      if (statusSelecionados.includes(valor)) {
        setStatusSelecionados(
          statusSelecionados.filter((s) => s !== valor)
        );
      } else {
        setStatusSelecionados([
          ...statusSelecionados,
          valor,
        ]);
      }
    }
  
    return (
      <div>
        <h4>Status</h4>
  
        {status.map((valor) => (
          <label key={valor}>
            <input
              type="checkbox"
              checked={statusSelecionados.includes(valor)}
              onChange={() => alterarStatus(valor)}
            />
            {valor}
          </label>
        ))}
      </div>
    );
  }
  
  export default FiltroStatus;