import "./header.css";

export const Header = () => {
  // los estilos en linea no se pueden reutilizar
  return (
    <header>
      <a className="logo">Logo</a>
      <ul className="menu">
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Otro</a>
        </li>
        <li>
          <a>Busqueda</a>
        </li>
      </ul>
    </header>
  );
};
