import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Talk from "./pages/Talk";
import NotFound from "./pages/NotFound";
import "./assets/all.scss";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/talk/:level" element={<Talk />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
