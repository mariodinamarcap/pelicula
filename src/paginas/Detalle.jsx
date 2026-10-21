import { Link, useParams } from "react-router"

export const Detalle = () => {
  const { codigo } = useParams()

  return (
    <main>
      <Link to="/">⬅️ Volver</Link>
      <h1>Detalle de: {codigo}</h1>
    </main>
  )
}
