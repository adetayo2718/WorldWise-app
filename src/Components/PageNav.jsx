import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">
            <strong>Pricing</strong>
          </NavLink>
        </li>
        <li>
          <NavLink to="/product">
            <strong>Product</strong>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            <strong>Login</strong>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
