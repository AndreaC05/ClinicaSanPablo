import Navbar from "../Components/Navbar";
import Servicios from "../Components/Servicios";
import Medall from "../assets/medallaSPSurco.png";
import Cuidado from "../assets/Cuidamos-de-ti.png";
import "../Style/HomePage.css";
import WhatsAppIcon from "../assets/images.jfif";

import Convenios from "../Components/Convenios";

export default function HomePage() {
  return (
    <>
      <div className="container_principal">
        <Navbar />
        <div className="servicios mt-5">
          <Servicios />
        </div>
        <div className="container_bienvenidos flex">
          <div className="letters_bienvenidos">
            <h2>Bienvenidos</h2>
            <p>
              Con más de 30 años de experiencia en el cuidado de la salud de
              millones de peruanos, en la Clínica San Pablo Surco, parte de la
              Red de Clínicas San Pablo, trabajamos día a día para poder ofrecer
              el servicio de calidad y seguridad que tu familia merece. <br />
              <div className="mt-4"></div>Por tercera vez y de manera
              consecutiva, en mayo del 2024 la Clinica San Pablo Surco fue
              nuevamente acreditada por la Joint Commission International JCI,
              organismo líder mundial que certifica los estándares de excelencia
              en las instituciones de salud en el mundo. <br />
              <div className="mt-4"></div>Con un staff de reconocidos médicos,
              en San Pablo Surco ofrecemos atención en todas las especialidades,
              avalados por equipos de última generación y la mejor
              infraestructura. <br />
              <div className="mt-4"></div>Conoces nuestros servicios: <br />
              <div className="mt-3"></div>
              <strong>Atención emergencia adultos y niños</strong>
              <br />
              <strong>Unidad de cuidados intensivos</strong>
              <br />
              <strong>Ambulancia Cardiomóvil</strong>
              <br />
              <strong>Atención hospitalaria y ambulatoria</strong>
              <br />
              <strong>Unidad materno infantil</strong>
              <br />
              <strong>Centro de Imágenes Especializadas</strong>
              <br />
              <strong>Centro Oftalmológico</strong>
            </p>
          </div>
          <div className="image_bienvenidos">
            <img src={Medall} alt="" />
          </div>
        </div>

        <div className="container_exitos flex">
          <h2>Casos de éxito</h2>
          <div className="letters_casos flex">
            <div className="image_caso">
              <img src={Cuidado} alt="" />
            </div>
            <div className="video">
              <video
                controls
                src="https://www.sanpablo.com.pe/wp-content/uploads/2024/08/Rosmer-Ayala.mp4"
              ></video>
              <h2>Rosmer Ayala, desafío insuperable</h2>
              <p>
                Conoce la conmovedora historia de Rosmer Ayala, quien logró
                superar un desafío que parecía insuperable; su historia es solo
                una, entre cientos de otras historias de apoyo, resiliencia y
                esperanza.
              </p>
            </div>
          </div>
        </div>

        <div className="container_convenios">
            <div className="letters_convenio flex justify-content-center">
                <h2>Convenios</h2>
            </div>
            <div className="carousel_convenios">
                <Convenios />
            </div>
        </div>

        {/* Ícono de WhatsApp */}
        <a
          href="https://wa.me/123456789" // Reemplaza con tu número de WhatsApp
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={WhatsAppIcon} alt="WhatsApp" />
        </a>
      </div>
    </>
  );
}
