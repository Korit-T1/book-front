import { Route, Routes } from "react-router-dom";
import Mypage from "./pages/Mypage/Mypage";
import Admin from "./pages/Admin/Admin";

function App() {
  const username = "ajvlzla0207"; // 유동적으로 받아올 부분

  return (
    <>
      <Routes>
        <Route path="/admin/*" element={ <Admin /> }/>
        <Route path={`/${username}`} element={<Mypage username={username}/>} />
      </Routes>
    </>
  )
}

export default App;
