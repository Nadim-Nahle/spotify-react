
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<Login />}></Route>
          {/*PROTECTED ROUTES*/}



          {/*404 ROUTE*/}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
