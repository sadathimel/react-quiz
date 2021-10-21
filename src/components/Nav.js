import classes from "../styles/Nav.module.css";
import Account from "./Account";
import logo from "../assets/images/logo-bg.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Logo" />
            <h3>Learn with Himel</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
