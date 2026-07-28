import { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import CartContext from '../context/CartContext';

function Checkout() {
  const { carrito, totalPrecio, vaciarCarrito } = useContext(CartContext);

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const [ordenGenerada, setOrdenGenerada] = useState(null);
  const [enviando, setEnviando] = useState(false);

  const manejarCambioNombre = (evento) => {
    setNombre(evento.target.value);
  };

  const manejarCambioEmail = (evento) => {
    setEmail(evento.target.value);
  };

  const manejarCambioTelefono = (evento) => {
    setTelefono(evento.target.value);
  };

  const manejarConfirmar = async (evento) => {
    evento.preventDefault();

    if (nombre.trim() === '' || email.trim() === '') {
      alert('Por favor completá al menos el nombre y el email');
      return;
    }

    setEnviando(true);

    const nuevaOrden = {
      comprador: { nombre, email, telefono },
      productos: carrito,
      total: totalPrecio,
      fecha: new Date().toLocaleString(),
    };

    try {
      const docRef = await addDoc(collection(db, 'ordenes'), nuevaOrden);

      setOrdenGenerada({ id: docRef.id, ...nuevaOrden });
      vaciarCarrito();
    } catch (error) {
      console.error('Error al guardar la orden:', error);
      alert('Hubo un error en la orden, intentá de nuevo');
    }

    setEnviando(false);
  };

  if (ordenGenerada) {
    return (
      <div className="checkout-exito">
        <h2>¡Gracias por tu compra, {ordenGenerada.comprador.nombre}!</h2>
        <p>Tu número de orden es:</p>
        <p className="numero-orden">{ordenGenerada.id}</p>
        <p>Total pagado: ${ordenGenerada.total}</p>
      </div>
    );
  }

  if (carrito.length === 0) {
    return <p className="mensaje-carga">No tenés productos en el carrito para comprar.</p>;
  }

  return (
    <div className="checkout">
      <h2>Finalizar compra</h2>

      <form onSubmit={manejarConfirmar}>
        <label>
          Nombre completo
          <input type="text" value={nombre} onChange={manejarCambioNombre} />
        </label>

        <label>
          Email
          <input type="email" value={email} onChange={manejarCambioEmail} />
        </label>

        <label>
          Teléfono
          <input type="tel" value={telefono} onChange={manejarCambioTelefono} />
        </label>

        <h3>Total a pagar: ${totalPrecio}</h3>

        <button type="submit" disabled={enviando}>
          {enviando ? 'Confirmando...' : 'Confirmar compra'}
        </button>
      </form>
    </div>
  );
}

export default Checkout;