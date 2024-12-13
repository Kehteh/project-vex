import LoginForm from "../components/LoginForm";
import "../components/stylesheet.css";

import useAuth from "../hooks/use-auth.js";

function LoginPage() {
  const {auth, setAuth} = useAuth();
  return <LoginForm />;
};



export default LoginPage;