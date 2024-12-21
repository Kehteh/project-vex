import "../styles.css";

import LoginForm from "../components/LoginForm";

import useAuth from "../hooks/use-auth.js";

function LoginPage() {
  const {auth, setAuth} = useAuth();
  return <LoginForm />;
};



export default LoginPage;