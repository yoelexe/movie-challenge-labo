// import { FiImage, FiMenu, FiHome, FiFastForward, FiSettings, FiUser, FiLogOut, FiHeart } from "react-icons/fi";
import "./header.css";
import { FiMenu, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  // los estilos en linea no se pueden reutilizar
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <FiMenu className="menu-icon"/>
      </div>
      <div className="nav-middle">
        <h1>CITYNEMA</h1>
      </div>
      <div className="nav-right flex-div">
        <FiSearch className="icon-right"/>
        <FiShoppingCart className="icon-right"/>
        <FiUser className="icon-right"/>
      </div>
    </nav>
  );
};
