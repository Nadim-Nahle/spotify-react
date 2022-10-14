
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}

          {/*PROTECTED ROUTES*/}



          {/*404 ROUTE*/}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
