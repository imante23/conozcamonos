import "./Contact.css";



const IconLocation = () => (
  <svg viewBox="0 0 384 512" width="20" height="20" aria-hidden>
    <path
      fill="currentColor"
      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
    />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 320 512" width="18" height="18" aria-hidden>
    <path
      fill="currentColor"
      d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
    />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 320 512" width="18" height="18" aria-hidden>
    <path
      fill="currentColor"
      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
    />
  </svg>
);


const IconInstagram = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    aria-hidden
  >
    {/* Contorno */}
    <rect
      x="1.5"
      y="1.5"
      width="21"
      height="21"
      rx="6"
      fill="white"
      stroke="currentColor"
      strokeWidth="2"
    />

    {/* Lente */}
    <circle
      cx="12"
      cy="12"
      r="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />

    {/* Punto */}
    <circle
      cx="18.5"
      cy="6.5"
      r="1.2"
      fill="currentColor"
    />
  </svg>
);




export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <header className="contact__header">
        <h2>Contacto</h2>
        <span>Escribinos</span>
      </header>

      <div className="contact__container">
        {/* Info */}
        <div className="contact__info">
          <div className="contact__item">
             <span className="contact__icon"><IconLocation /></span>
            <span>Buenos Aires, Argentina</span>
          </div>

          <div className="contact__item">
            <span className="contact__icon"><IconPhone /></span>
            <span>+54 11 3474 0897</span>
          </div>

          <div className="contact__item">
            <span className="contact__icon"><IconMail /></span>
            <span>info@feriadecitas.com</span>
          </div>
        </div>

        {/* Social */}
        <div className="contact__social">
          <a href="#" aria-label="Facebook">
            <span className="contact__icon"><IconFacebook /></span>
            <span>/conozcamonos</span>
          </a>

          <a href="#" aria-label="Instagram">
            <span className="contact__icon"><IconInstagram /></span>
            <span>/conozcamonosba</span>
          </a>
        </div>
      </div>
    </section>
  );
}
