import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};
export default AppRoutes;
