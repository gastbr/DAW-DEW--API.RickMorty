import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Layout() {
    return (
        <div className="container">
            <Navbar />
            <Outlet>

            </Outlet>
            <footer>Footer</footer>
        </div>
    );
}