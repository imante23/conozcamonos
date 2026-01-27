import "./About.css";

export default function About() {
    return (
    <section className="speed-dating" id="que-es">
      <div className="speed-dating__container">
        <h2>¿Cómo funciona?</h2>

        <p>
          Organizamos encuentros presenciales con una dinámica simple y cuidada,
pensada para que conocer personas nuevas sea cómodo y natural.</p>

<p>Participarás en conversaciones uno a uno, guiadas de forma amable,
para charlar, conocer otras personas y ver luego si hay interés en seguir en contacto.</p>
        

        <div className="speed-dating__steps">
          <div className="step">
            <div className="step__icon">📍</div>
            <span className="step__text">Llegás</span>
          </div>

          <div className="step">
            <div className="step__icon">💬</div>
            <span className="step__text">Conversás</span>
          </div>

          <div className="step">
            <div className="step__icon">❤️</div>
            <span className="step__text">Conectás</span>
          </div>
        </div>
      </div>
    </section>
  );

}



// Interior con pasos como numeros :

// return (
//     <section className="speed-dating">
//       <div className="speed-dating__container">
//         <h2>¿Cómo funciona el Speed Dating?</h2>

//         <p>
//           Conocé personas en encuentros rápidos y presenciales.
//           Cada cita dura solo unos minutos, el tiempo justo para
//           conectar, conversar y decidir si querés volver a verte.
//         </p>

//         {/* Steps */}
//         <div className="speed-dating__steps">
//           <div className="step">
//             <span className="step__number">1</span>
//             <span className="step__text">Llegás</span>
//           </div>

//           <div className="step">
//             <span className="step__number">2</span>
//             <span className="step__text">Conocés</span>
//           </div>

//           <div className="step">
//             <span className="step__number">3</span>
//             <span className="step__text">Elegís</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
