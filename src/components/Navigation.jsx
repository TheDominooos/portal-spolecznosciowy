import { ReactComponent as List } from "../icons/list.svg";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="Navigation d-flex justify-content-start">
        <button className="List">
          <List />
        </button>
        <button className="Navigation">Placeholder name</button>
        <button className="Navigation">
          <Link to="/">Home</Link>
        </button>
        <button className="Navigation">
          <Link to="login">Login</Link>
        </button>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
