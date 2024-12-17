import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";

function NavBar() {
  const {auth, setAuth} = useAuth();

  const handleLogout = () => {
      window.localStorage.removeItem("token");
      setAuth({ token: null });
    };

  console.log(auth)

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Pledge">Pledge</Link> 
        <Link to="/Launchpad">Launchpad</Link>
        {auth.token ? (
            <Link to="/" onClick={handleLogout}>
              Log Out
            </Link> 
            ) : ( 
          <>
            <Link to="/login">
              Login
            </Link>
            <Link to="/signup">
              Create an Account
            </Link>
          </>
          )}


      </nav>
      {/* React Router will pass components into the <Outlet /> based on the path */}
      <Outlet />
    </div>
  );
}

export default NavBar;