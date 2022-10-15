
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
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



          {/*404 ROUTE*/}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
