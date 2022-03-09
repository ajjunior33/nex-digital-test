import { Routes, Route } from "react-router-dom";
import CreateAccount from "../pages/CreateAccount";
import SignIn from "../pages/SignIn";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
  );
};
export default AuthRoutes;
