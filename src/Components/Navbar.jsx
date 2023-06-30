import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import "../index.css";
import img from "../images/DH.png";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const theme = state.theme === "dark" ? "dark" : "light";

  const changeTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={theme}>
      <div>
        <i>
          <img className="logo" src={img} alt="logo" />
        </i>
      </div>
      <div style={{ display: "flex" }}>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/favs">Favoritos</Link>
          </li>
        </ul>
        <button onClick={changeTheme}>Cambiar Tema</button>
      </div>
    </nav>
  );
};

export default Navbar;
