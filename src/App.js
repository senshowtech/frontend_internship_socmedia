import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  document.body.style.backgroundColor = "#F5F5F5";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
