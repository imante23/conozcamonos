import { useState } from "react";
import "./Navbar.css";
// import Logo from "../../assets/logo-feria-de-citas2.png";
import Logo from "../../assets/logo-feria.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          {/* <img
            src={Logo}
            alt="Citas rápidas Buenos Aires"
          /> */}
          <span className="brand">· Conozcámonos ·</span>
        </div>

        {/* Desktop menu */}
        <nav className="navbar__links">
          <a href="#que-es">¿Cómo funciona?</a>
          <a href="#eventos">Eventos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${isOpen ? "show" : ""}`}>
        <a onClick={() => setIsOpen(false)} href="#que-es">¿Cómo funciona?</a>
        <a onClick={() => setIsOpen(false)} href="#eventos">Eventos</a>
        <a onClick={() => setIsOpen(false)} href="#contacto">Contacto</a>
      </div>
    </header>
  );
}
