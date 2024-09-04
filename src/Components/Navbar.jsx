import { Link } from "react-router-dom";
import Logo from "../assets/LogoSPSurco.png";
import "../Style/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar flex">
        <div className="img_navbar">
          <img src={Logo} alt="" />
        </div>
        <div className="navegate_navbar">
          <ul className="flex list_navbar">
            <li>
              <Link to="">Staff médico</Link>
            </li>
            <li>
              <Link to="">Nosotros</Link>
            </li>
            <li>
              <Link to="">Servicios</Link>
            </li>
            <li>
              <Link to="">Empresa</Link>
            </li>
            <li>
              <Link to="">Pacientes</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
