import "../Style/Servicios.css";
import PropTypes from "prop-types";
import { Button } from "primereact/button";
import Doctor from "../assets/Servicios/user-doctor-solid.png";
import Users from "../assets/Servicios/users-solid.png";
import Hospital from "../assets/Servicios/hospital-solid.png";
import Staff from "../assets/Servicios/stethoscope-solid.png";

function ServicioItem({ icono, titulo, descripcion, etiquetaBoton }) {
  return (
    <div className="section m-2 w-10  md:w-5 lg:w-2 ">
      <div className="image_icon">
        <img src={icono} alt={titulo} />
      </div>
      <div className="letters_serv">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
      <div className="button_serv">
        <Button label={etiquetaBoton} severity="warning" rounded />
      </div>
    </div>
  );
}

// Definición de PropTypes para la validación de los props
ServicioItem.propTypes = {
  icono: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  etiquetaBoton: PropTypes.string.isRequired,
};

export default function Servicios() {
  return (
    <>

          <div className="flex-wrap flex px-5 justify-content-center lg:px-8">
        <ServicioItem
          icono={Doctor}
          titulo="Reserva una cita"
          descripcion="Reserva una cita a través de nuestro canal digital"
          etiquetaBoton="Reservar"
        />
        <ServicioItem
          icono={Users}
          titulo="Pacientes"
          descripcion="Atención integral en tu bienestar y el de tu familia"
          etiquetaBoton="Conoce más"
        />
        <ServicioItem
          icono={Hospital}
          titulo="Servicios"
          descripcion="Conoce los servicio que brinda la Clínica San Pablo"
          etiquetaBoton="Conoce más"
        />

        <ServicioItem
          icono={Staff}
          titulo="Staff Médico"
          descripcion="Conoce a tu doctor de confianza y sus horarios"
          etiquetaBoton="Conoce al Staff"
        />
      </div>

    </>
  );
}
