import { Route, Routes } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import MainRoute from "./Routes/MainRoute";
import SinginPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AdminSigninPage from "./pages/Admin/AdminSigninPage/AdminSigninPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainRoute />}/>
        <Route path="/userlogin" element={<SinginPage/> } />
        <Route path="/usersignup" element={<SignupPage />} />
        <Route path="/admin/*" element={<AdminRoute />}/>
        <Route path="/adminlogin" element={<AdminSigninPage />}/>
      </Routes>
    </>
  )
}
export default App;
