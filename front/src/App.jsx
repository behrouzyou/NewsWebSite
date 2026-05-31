import "./index.css";
import "../node_modules/bulma/css/bulma.css";
import Login from "./admin/auth/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./admin/dashboard/Dashboard";
import NotFound from "./pages/NotFound.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/administrator" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer  />
    </>
  );
}

export default App;
