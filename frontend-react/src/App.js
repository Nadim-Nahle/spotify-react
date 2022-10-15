
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Albmus from "./pages/login/albums/Albmus";
import Login from "./pages/login/Login";
import Search from "./pages/search/Search";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<Login />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/albums" element={<Albmus />}></Route>
          {/*PROTECTED ROUTES*/}



          {/*404 ROUTE*/}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
