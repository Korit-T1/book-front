import { Route, Routes } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import MainRoute from "./Routes/MainRoute";
import SinginPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AdminSigninPage from "./pages/Admin/AdminSigninPage/AdminSigninPage";
import FindUserNamePage from "./pages/FindUserNamePage/FindUserNamePage";
import FindPasswordPage from "./pages/FindPasswordPage/FindPasswordPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainRoute />}/>
        <Route path="/userlogin" element={<SinginPage/> } />
        <Route path="/usersignup" element={<SignupPage />} />
        <Route path="/admin/*" element={<AdminRoute />}/>
        <Route path="/adminlogin" element={<AdminSigninPage />}/>
        <Route path="/searchUserInfo/findId" element={<FindUserNamePage />}/>
        <Route path="/searchUserInfo/findPw" element={<FindPasswordPage />}/>
      </Routes>
    </>
  )
}

export default App;
