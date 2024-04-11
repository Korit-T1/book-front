import {  BrowserRouter, Route, Routes  } from "react-router-dom";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SinginPage";
import AdminsigninPage from "./pages/Admin/AdminSigninPage/AdminSigninPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderTop />
      <Routes>
        <Route path="/" element={<HomePage /> } ></Route>
        <Route path="/auth/signup" element={<SignupPage /> }></Route>
        <Route path="/auth/signin" element={<SigninPage /> }></Route>
        <Route path="/auth/admin/signin" element={<AdminsigninPage /> }></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
