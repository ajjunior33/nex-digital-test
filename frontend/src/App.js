import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import ListRoutes from "./routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import GlobalStyled from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ListRoutes />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyled />
      <ToastContainer />
    </>
  );
}

export default App;
