import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Rotas from "./Routes/route";

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
