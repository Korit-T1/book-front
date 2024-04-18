import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import SignupPage from "../src/pages/SignupPage/SignupPage"
import SigninPage from "../src/pages/SigninPage/SigninPage"
import AdminRoute from "./Routes/AdminRoute";
import MainRoute from "./Routes/MainRoute";

function App() {
  return (
    <>
      <AdminRoute />
      <MainRoute />
    </>
  )
}

export default App;
