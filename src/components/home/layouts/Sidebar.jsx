import "./sidebar.css";
import { FiHeart, FiHome, FiLogOut, FiSettings, FiUser, FiWatch } from "react-icons/fi";

export const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="short-links">
        <a> <FiHome className="icon"/> Home</a>
        <a> <FiWatch className="icon" /> Movies</a>
        <a> <FiHeart className="icon" /> Favorites</a>
        <a> <FiUser className="icon" /> User</a>
        <a> <FiSettings className="icon"/> Settings</a>
        <hr></hr>
        <a> <FiLogOut className="icon" /> Log Out</a>
      </div>
    </section>
  )
}
