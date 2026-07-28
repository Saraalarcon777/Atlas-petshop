import {Link} from 'react-router-dom';
import CartWidget from './cartwidget';

function navbar() {
    return (
        <nav className="barra-navegacion">
            <Link to="/" className="logo">
            Atlas PetShop
            </Link>

            <div className="links-categorias">
                <Link to="/">Inicio</Link>
                <Link to="/">Productos</Link>
                <Link to="/categoria/perros">Perros</Link>
                <Link to="/categoria/gatos">Gatos</Link>
            </div>

            <CartWidget />
        </nav>
    );
}

export default navbar;
