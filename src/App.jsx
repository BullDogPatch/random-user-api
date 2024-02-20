import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import UserPage from "./components/UserPage";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
