import {  BrowserRouter, Route, Routes  } from "react-router-dom";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SinginPage";
import MainPage from "./pages/MainPage/MainPage";
import BookInfoPage from "./pages/BookInfoPage/BookInfoPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderTop />
      <Routes>
        <Route path="/" element={<MainPage /> } ></Route>
        <Route path="/signup" element={<SignupPage /> }></Route>
        <Route path="/signin" element={<SigninPage /> }></Route>
        <Route path="/books" element={<BookInfoPage /> }></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
