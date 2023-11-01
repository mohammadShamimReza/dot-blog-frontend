import { ReactElement } from "react";
import Layout from "../../components/Layouts/Layout";
import LoginForm from "./LoginForn";

function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
