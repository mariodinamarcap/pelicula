export const Buscador = ({ peliculaEscrita, setPeliculaEscrita, buscarPeliculas }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        buscarPeliculas()
      }}
    >
      <input
        value={peliculaEscrita}
        onChange={(e) => setPeliculaEscrita(e.target.value)}
        placeholder="Busca tu película acá"
      />
      <button type="submit">Buscar</button>
    </form>
  )
}
