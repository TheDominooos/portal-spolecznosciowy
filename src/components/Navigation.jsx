import { ReactComponent as List } from "../icons/list.svg";
import { Outlet, Link } from "react-router-dom";
import useTokenStore from "../hooks/useToken";

function Navigation() {
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  return (
    <>
      <nav className="Navigation d-flex justify-content-start align-items-center">
        <button className="list-button">
          <List />
        </button>
        <button className="navigation-button">Keksik</button>

        {token == null ? (
          <button className="navigation-button">Home</button>
        ) : (
          <Link to="/">
            <button className="navigation-button">Home</button>
          </Link>
        )}

        {token == null ? (
          <Link to="login">
            <button className="navigation-button">Log in</button>
          </Link>
        ) : (
          <>
            <Link to="login">
              <button className="navigation-button">Change account</button>
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setToken(null);
              }}
              className="navigation-button"
            >
              Log out
            </button>
          </>
        )}

        <Link to="register">
          <button className="navigation-button">Register</button>
        </Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Navigation;
