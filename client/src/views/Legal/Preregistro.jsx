import "./Legal.css";

export default function Preregistro() {
  return (
    <main className="terms">
      <section className="terms__box">
        <h1>Privacidad y Términos</h1>

        {/* <p className="terms__updated">
          Última actualización: 10 de enero de 2026
        </p> */}

        {/* <p>
          Al acceder y utilizar este sitio web, aceptás cumplir con los
          presentes Términos y Condiciones. Si no estás de acuerdo con
          alguno de ellos, te recomendamos no utilizar el sitio.
        </p> */}

      
        

        <h2>Política de Privacidad</h2>
        <p>
          Recopilamos información básica como nombre, edad, zona y correo electrónico únicamente con el fin de:
        </p>
        <ul className="terms__list">
        <li>gestionar el preregistro de personas interesadas</li>
        <li>contactarte en caso de que se organicen actividades o encuentros</li>
        <li>enviarte novedades relacionadas con esta iniciativa</li>
        </ul>

         <p>
          Tus datos:
        </p>
        <ul className="terms__list">
        <li>no serán vendidos ni cedidos a terceros</li>
        <li>se usarán únicamente para comunicaciones vinculadas a este proyecto</li>
        <li>serán almacenados de forma segura</li>
        </ul>
        <p>
          Podés solicitar la modificación o eliminación de tus datos en cualquier momento escribiendo a info@feriadecitas.com
        </p>


        <h2>Términos y condiciones / Aviso legal</h2>
        <p>
          Este sitio tiene como objetivo recopilar el interés de personas adultas en participar en futuras actividades o encuentros sociales.
        </p>
         <ul className="terms__list">
        <li>El preregistro no garantiza la realización de actividades ni encuentros.</li>
        <li>La participación en cualquier actividad será siempre voluntaria.</li>
        <li>No se garantiza la compatibilidad, afinidad ni resultados entre las personas participantes.</li>
        <li>La organización no se responsabiliza por interacciones, acuerdos o encuentros que se produzcan fuera de las actividades organizadas.</li>
        </ul>

       
        <p>
          Al completar el formulario, confirmás que sos mayor de 18 años y aceptás estos términos.
        </p>

       
      </section>
    </main>
  );
}
