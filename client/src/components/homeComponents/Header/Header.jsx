import "./Header.css";

export default function Header() {
  return (
    <section className="header">
      <div className="header__overlay" />

      <div className="header__content">
        <h1>Encuentros presenciales en Buenos Aires</h1>
        {/* <p>
          Conocé gente cerca tuyo, sin algoritmos raros.
          Solo conversaciones reales.
        </p> */}
        <p>
          Conocé personas en Zona Norte, sin algoritmos raros ni perfiles infinitos.
          Solo conversaciones reales.
        </p>

        <button className="header__button">
          Sumarme
        </button>
      </div>
    </section>
  );
}
