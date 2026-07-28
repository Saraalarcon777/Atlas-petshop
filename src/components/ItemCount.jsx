import{ useState} from 'react';

function ItemCount({stock, inicial, onAgregar}) {
    const [cantidad, setCantidad] = useState(inicial);

    const restar = () =>{
        if (cantidad >1) {
            setCantidad(cantidad -1);
        }
    };

    const sumar = () => {
        if (cantidad < stock){
            setCantidad(cantidad +1);
        }
    };

    if(stock === 0){
        return <p className="sin-stock">No hay stock disponible</p>;
    }

    return (
        <div className="selector-cantidad">
            <div className="botones-cantidad">
                <button onClick={restar}>-</button>
                <span>{cantidad}</span>
                <button onClick={sumar}>+</button>
            </div>
            <button className="boton-agregar" onClick={() => onAgregar(cantidad)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;