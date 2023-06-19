// routes -> el apartado donde estaran las rutas individuales
// la ruta se define con Route
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../components/home/home"

export const Routering = () => {
  // hacer ruteado a home o a una página de error
  return (
    <Routes>
      <Route path="/" element={<h1>Este es el Login</h1>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/*" element={<Navigate to="/home"/>}></Route>
    </Routes>
  )
}
