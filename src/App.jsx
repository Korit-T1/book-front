import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import SignupPage from "../src/pages/SignupPage/SignupPage"
import SigninPage from "../src/pages/SigninPage/SigninPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={ <Home />} />
        <Route path="/signin" element={<SigninPage /> } />
        <Route path="/signup" element={<SignupPage /> } />
        <Route path="/admin/*" element={ <Admin /> } />
      </Routes>
    </>
  )
}

export default App;
