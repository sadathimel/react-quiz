import Account from "./Account";
import classes from '../styles/Nav.module.css'
import logo from '../assets/images/logo-bg.svg'

export default function Nav(){
    return (
        <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Logo" />
            <h3>React</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
    );
}