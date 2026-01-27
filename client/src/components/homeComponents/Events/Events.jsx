import "./Events.css";
import Image1 from "../../../assets/pareja20-2.jpg";
// import Image2 from "../../../assets/pareja23.avif";
import Image2 from "../../../assets/pareja10.jpg";
import Image3 from "../../../assets/pareja-50-2.jpg";

const events = [
//   {
//     id: 1,
//     image: "/event-1.jpg",
//     title: "30s & 40s citas",
//     day: "21",
//     month: "ENE",
//     date: "Miércoles, 21 Enero 2026",
//     time: "19:00",
//     place: "Pilar, Buenos Aires"
//   },
//   {
//     id: 2,
//     image: "/event-2.jpg",
//     title: "Speed Dating +40",
//     day: "22",
//     month: "ENE",
//     date: "Jueves, 22 Enero 2026",
//     time: "19:00",
//     place: "Pilar, Buenos Aires"
//   },
//   {
//     id: 3,
//     image: "/event-3.jpg",
//     title: "Networking night",
//     day: "23",
//     month: "ENE",
//     date: "Viernes, 23 Enero 2026 ",
//     time: "19:00",
//     place: "Pilar, Buenos Aires"
//   },

  {
    id: 4,
    image: Image1,
    title: "Solteros en sus 30s",
    day: "21",
    month: "ENE",
    slogan: "Tu etapa, con apertura a edades cercanas.",
    registro: "Cupos para febrero 2026",
    place: "San Isidro, Buenos Aires"
   },

    {
    id: 5,
    image: Image2,
    title: "Solteros en sus 40s",
    day: "21",
    month: "ENE",
    slogan: "Tu etapa, con apertura a edades cercanas.",
    registro: "Cupos para febrero 2026",
    place: "Escobar, Buenos Aires"
   },

    {
    id: 6,
    image: Image3,
    title: "Solteros en sus 50s",
    day: "21",
    month: "ENE",
    slogan: "Tu etapa, con apertura a edades cercanas.",
    registro: "Cupos para febrero 2026",
    place: "Pilar, Buenos Aires"
   }

  
];

export default function Events() {
   const singleEvent = events.length === 1;

  return (
    <section className="events" id="eventos">
      <header className="events__header">
        <h2>Próximos eventos</h2>
        {/* <span>Explorá nuestros encuentros</span> */}
        <span>Registra tu email para reservar tu lugar</span>
      </header>

      <div className="events__zone">  
      <h3>Zona Norte</h3>
      </div>

      <div
        className={`events__grid ${
          singleEvent ? "events__grid--single" : ""
        }`}
      >
        {events.map(event => (
          <article className="event-card" key={event.id}>
             <div className="event-card__overlay">
                <span>Reservar</span>
            </div>

            <span className="event-card__badge">
                Cupos limitados
            </span>

            <div className="event-card__image">
              <img src={event.image} alt={event.title} />
            </div>

            <div className="event-card__content">
              <h3>{event.title}</h3>
              {/* <p className="event-card__date">{event.date}</p> */}
              <p className="event-card__registro">{event.registro}</p>
              <p className="event-card__slogan">{event.slogan}</p>     
              {/* <p className="event-card__place">{event.place}</p> */}

              {/* <button className="event-card__button">
                Reservar
              </button> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Esta bueno que haya hasta 6 hileras de cards en la web y menos en la version mobile




//CARD ORIGINAL:

{/* <div className="event-card__content">
              <h3>{event.title}</h3>
              <p className="event-card__date">{event.date}</p>    
              <p className="event-card__time">{event.time}</p>
              <p className="event-card__place">{event.place}</p>

              <button className="event-card__button">
                Reservar
              </button>
            </div> */}





// Codigo con fechas mas para PC

//  const singleEvent = events.length === 1;

//   return (
//     <section className="events">
//       <header className="events__header">
//         <h2>Próximos eventos</h2>
//         <span>Explorá nuestros encuentros</span>
//       </header>

//       <div
//         className={`events__grid ${
//           singleEvent ? "events__grid--single" : ""
//         }`}
//       >
//         {events.map(event => (
//           <article className="event-card" key={event.id}>
//             <div className="event-card__image">
//               <img src={event.image} alt={event.title} />
//             </div>

//               <div className="event-card__body">
//               <div className="event-date">
//                 <span className="event-date__month">{event.month}</span>
//                 <span className="event-date__day">{event.day}</span>
//               </div>

//             <div className="event-card__content">
//               <h3>{event.title}</h3>
//               <p className="event-card__date">{event.date}</p>
//               <p className="event-card__place">{event.place}</p>

//             </div>
//             </div>
//               <button className="event-card__button">
//                 Reservar
//               </button>
//           </article>
//         ))}
//       </div>
//     </section>
//   );