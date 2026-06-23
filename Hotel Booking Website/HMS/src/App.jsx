import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Pages/Index";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Pages/About";

function App() {
  return (
    <>
     <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
