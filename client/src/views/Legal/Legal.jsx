import "./Legal.css";

export default function Legal() {
  return (
    <main className="terms">
      <section className="terms__box">
        <h1>Términos y Condiciones</h1>

        <p className="terms__updated">
          Última actualización: 10 de enero de 2026
        </p>

        <p>
          Al acceder y utilizar este sitio web, aceptás cumplir con los
          presentes Términos y Condiciones. Si no estás de acuerdo con
          alguno de ellos, te recomendamos no utilizar el sitio.
        </p>

        <h2>1. Uso del sitio</h2>
        <p>
          El contenido de este sitio tiene fines informativos y está
          destinado a personas mayores de 18 años. El uso indebido del
          sitio queda estrictamente prohibido.
        </p>

        <h2>2. Reservas y pagos</h2>
        <p>
          Las reservas realizadas a través del sitio están sujetas a
          disponibilidad. Los pagos no son reembolsables salvo que se
          indique lo contrario.
        </p>

        <h2>3. Responsabilidad</h2>
        <p>
          La organización no se responsabiliza por daños, pérdidas o
          inconvenientes derivados del uso del sitio o de la asistencia
          a los eventos.
        </p>

        <h2>4. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos Términos y
          Condiciones en cualquier momento. Las modificaciones entrarán
          en vigencia desde su publicación.
        </p>

        <h2>5. Contacto</h2>
        <p>
          Para cualquier consulta relacionada con estos términos,
          podés escribirnos a{" "}
          <a href="mailto:info@tusitio.com">info@tusitio.com</a>.
        </p>
      </section>
    </main>
  );
}
