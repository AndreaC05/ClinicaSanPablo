import Navbar from "../Components/Navbar";
import Servicios from "../Components/Servicios";

export default function HomePage() {
    return(
        <>
            <div className="container_principal">
                <Navbar />
                <div className="servicios mt-5">
                    <Servicios />
                </div>
            </div>
        </>
    );
}