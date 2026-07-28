import {useContext} from 'react';
import { Link } from 'react-router-dom';
import{FaShoppingCart} from 'react-icons/fa';
import CartContext from '../context/CartContext';

function cartwidget() {
    const{totalUnidades} = useContext(CartContext);

    return (
        <Link to="/carrito" className="widget-carrito">
            <FaShoppingCart size={22} color="white" />
            <span>{totalUnidades}</span>
        </Link>
    );
}

export default cartwidget;