import "./More.css";


const IconLocation = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    {/* Fondo */}
    <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15" />

    {/* Ícono */}
    <path
      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="10"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);


const IconUsers = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15" />

    <path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="9"
      cy="7"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M22 21v-2a4 4 0 0 0-3-3.87"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 3.13a4 4 0 0 1 0 7.75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);


const IconClock = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15" />

    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
    />
    <polyline
      points="12 6 12 12 16 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);







export default function More() {
  return (
    <section className="more">
      <div className="more__overlay" />

      <div className="more__container">
        {/* Texto */}
        <div className="more__content">
          <h2>Hacé conexiones verdaderas</h2>

          <p className="more__lead">
            Conocé personas en un ambiente cuidado,
diseñado para que la conversación fluya de forma natural.
          </p>

          <p>
            Cada encuentro está guiado para ayudarte a romper el hielo,
sentirte a gusto desde el primer minuto
y descubrir si existe una conexión auténtica.
          </p>
        </div>

        {/* Imagen */}
        {/* <div className="more__image">
          <img
            src="/gastronomia.jpg"
            alt="Speed Dating bar"
          />
        </div> */}

         {/* Frases con íconos */}
        <div className="more__features">
          <div className="feature feature--orange">
            <IconClock />
            <span>Conversaciones breves y cuidadas</span>
          </div>

          <div className="feature feature--pink">
            <IconUsers />
            <span>Grupos reducidos (hasta 24 personas)</span>
          </div>

          <div className="feature feature--purple">
            <IconLocation />
            <span>Espacios seleccionados en Zona Norte</span>
          </div>
        </div>

      </div>
    </section>
  );
}
