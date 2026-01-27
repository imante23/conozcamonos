import "./Footer.css";
import Logo from "../../assets/logo-feria.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__overlay" />

      <div className="footer__content">
        <div className="footer__logo">
          {/* Reemplazá por tu SVG o imagen */}
          <img
            src={Logo}
            alt="Citas rápidas Buenos Aires"
            className="footer__logo_icon"
          />
        </div>

        <h3 className="footer__title">· Conozcámonos ·</h3>

        <p className="footer__description">
          Encuentros presenciales. Conversaciones reales.
        </p>

        <p className="footer__copy">
          © 2026 Feria de citas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
