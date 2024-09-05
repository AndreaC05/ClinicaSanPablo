import { Link } from "react-router-dom";
import Logo from "../assets/LogoSPSurco.png";
import LogoMobile from '../assets/logo_mobile.png';
import "../Style/Navbar.css";

export default function Navbar() {
  return (
    <>

      <div className="navbar flex sticky top-0 border-bottom-2 border-bottom-2 border-100 shadow-1 relative">
        <div className="img_navbar">
          <img className="hidden lg:block transition-duration-150 transition-all	" src={Logo} alt="" />
          <img className="block lg:hidden w-4rem h-4rem -mt-4 absolute left-0 LogoMobile transition-duration-150 transition-all	"  src={LogoMobile} alt="" />
        </div>
        <div className="navegate_navbar hidden lg:flex">
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

        <div className="flex lg:hidden sidebar-open  -mr-8"> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
         className="w-3rem text-indigo-800 -mr-8 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

        </div>
      </div>
    </>
  );
}
