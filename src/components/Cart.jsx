import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

function Cart() {
  const { carrito, quitarDelCarrito, vaciarCarrito, totalPrecio } = useContext(CartContext);
  const navigate = useNavigate();

  if (carrito.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <p>Todavía no agregaste ningún producto.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de compras</h2>

      {carrito.map((item) => (
        <div key={item.id} className="fila-carrito">
          <img src={item.imagen} alt={item.nombre} width="60" />
          <span>{item.nombre}</span>
          <span>Cantidad: {item.cantidad}</span>
          <span>Subtotal: ${item.precio * item.cantidad}</span>
          <button onClick={() => quitarDelCarrito(item.id)}>Quitar</button>
        </div>
      ))}

      <h3>Total: ${totalPrecio}</h3>

      <div className="botones-carrito">
        <button className="boton-vaciar" onClick={vaciarCarrito}>Vaciar carrito</button>
        <button className="boton-finalizar" onClick={() => navigate('/checkout')}>Finalizar compra</button>
      </div>
    </div>
  );
}

export default Cart;