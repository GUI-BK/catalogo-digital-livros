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
    <div className="filtro-status">
      <h4>Status</h4>

      <div className="opcoes-status">
        {status.map((valor) => (
          <label
            key={valor}
            className={
              "status-pill" +
              (statusSelecionados.includes(valor) ? " ativo" : "")
            }
          >
            <input
              type="checkbox"
              checked={statusSelecionados.includes(valor)}
              onChange={() => alterarStatus(valor)}
            />
            {valor}
          </label>
        ))}
      </div>
    </div>
  );
}

export default FiltroStatus;