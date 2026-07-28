import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import CartContext from '../context/CartContext';

function ItemDetail({ producto }) {
    const [agregado, setAgregado] = useState(false);
    const [cantidadElegida, setCantidadElegida] = useState(0);
    const {agregarAlCarrito} = useContext(CartContext);

    const manejarAgregar = (cantidad) => {
        agregarAlCarrito(producto, cantidad);
        setCantidadElegida(cantidad);
        setAgregado(true);
    };

    return (
        <div className="detalle-producto">
            <img src={producto.imagen} alt={producto.nombre} />

            <div className="info-detalle">
                <h2>{producto.nombre}</h2>
                <p className="precio">${producto.precio}</p>
                <p>{producto.descripcion}</p>

                {!agregado ? (
                    <ItemCount stock={producto.stock} inicial={1} onAgregar={manejarAgregar} />
                ) : (
                    <p className="mensaje-agregado">
                        Agregaste {cantidadElegida} unidad(es) al carrito
                    </p>
                )}
            </div>
        </div>

    )
}

export default ItemDetail;
