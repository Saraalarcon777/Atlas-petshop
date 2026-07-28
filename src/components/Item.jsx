import { Link } from 'react-router-dom';

function Item({ producto }) {
  return (
    <div className="tarjeta-producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="precio">${producto.precio}</p>

      {producto.stock === 0 ? (
        <p className="sin-stock">Sin stock</p>
      ) : (
        <Link to={`/producto/${producto.id}`} className="boton-detalle">
          Me interesa!
        </Link>
      )}
    </div>
  );
}

export default Item;