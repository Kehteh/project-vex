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
        <Link to="/">Launchpad</Link>
        <Link to="/login">Login</Link>
        <Link to="/" onClick={handleLogout}>
        Log Out
        </Link>

      </nav>
      {/* React Router will pass components into the <Outlet /> based on the path */}
      <Outlet />
    </div>
  );
}

export default NavBar;