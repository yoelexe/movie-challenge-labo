// routes -> el apartado donde estaran las rutas individuales
// la ruta se define con Route
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../components/home/home"
import { Movies } from "../components/movies/Movies"

export const Routering = () => {
  // hacer ruteado a home o a una página de error
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/*" element={<Navigate to="/"/>}></Route>
    </Routes>
  )
}
