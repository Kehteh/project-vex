import LoginForm from "../components/LoginForm";
import "../components/stylesheet.css";

import useAuth from "../hooks/use-auth.js";

function LoginPage() {
  return <LoginForm />;
  const {auth, setAuth} = useAuth();
};



export default LoginPage;