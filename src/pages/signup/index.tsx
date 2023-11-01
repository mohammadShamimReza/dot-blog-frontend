import { ReactElement } from "react";
import Layout from "../../components/Layouts/Layout";
import SignupForm from "./SighUpForm";

function SignUp() {
  return (
    <div>
      <SignupForm />
    </div>
  );
}

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
