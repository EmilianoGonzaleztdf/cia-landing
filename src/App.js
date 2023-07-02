import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Inicio from "./components/inicio/Inicio";
import Empresa from "./components/empresa/Empresa";
import Productos from "./components/productos/Productos";
import Contacto from "./components/contacto/Contacto";
import Footer from "./components/footer/Footer";
import RedesSociales from "./components/redesSociales/RedesSociales";
import P404 from "./components/p404/P404";
import WhatsAppButton from "./components/whatsappButton/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<P404 />} />
        </Routes>
        <WhatsAppButton/>
        <RedesSociales />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
