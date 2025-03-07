import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="btn btn-outline-primary">Inicio</NavLink>
                <NavLink to="/contacto" className="btn btn-outline-primary">Contacto</NavLink>
                <NavLink to="/blog" className="btn btn-outline-primary">Blog</NavLink>
            </div>
        </div>
    );
}