import { Route, Routes } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import MainRoute from "./Routes/MainRoute";
import SinginPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AdminSigninPage from "./pages/Admin/AdminSigninPage/AdminSigninPage";
import NoticeBoardWritePage from "./pages/Admin/NoticeBoardWritePage/NoticeBoardWritePage";
import BoardListPage from "./pages/BoardListPage/BoardListPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainRoute />}/>
        <Route path="/userlogin" element={<SinginPage/> } />
        <Route path="/usersignup" element={<SignupPage />} />
        <Route path="/admin/*" element={<AdminRoute />}/>
        <Route path="/adminlogin" element={<AdminSigninPage />}/>
        <Route path="/boardWrite" element={<NoticeBoardWritePage />}/>
      </Routes>
    </>
  )
}

export default App;
