import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { AddStudent } from "./pages/AddStudent";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-students" element={<AddStudent />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
