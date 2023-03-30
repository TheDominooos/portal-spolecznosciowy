import { ReactComponent as List } from "../icons/list.svg";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="Navigation d-flex justify-content-start align-items-center">
        <button className="list-button">
          <List />
        </button>
        <button className="navigation-button">Keksik</button>

        <Link to="/">
          <button className="navigation-button">Home</button>
        </Link>

        <Link to="login">
          <button className="navigation-button">Login</button>
        </Link>

        <Link to="register">
          <button className="navigation-button">Register</button>
        </Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Navigation;
