
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import RequireAuth from "./middleware/RequireAuth";
import Album from "./pages/album/Album";
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
          <Route path="/album" element={<Album />}></Route>
          {/*PROTECTED ROUTES*/}
          <Route element={<RequireAuth />}>

          </Route>



          {/*404 ROUTE*/}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
