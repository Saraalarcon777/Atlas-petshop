import React, { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    const yaEstaEnCarrito = carrito.find((item) => item.id === producto.id);

    if (yaEstaEnCarrito) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      );
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  const quitarDelCarrito = (id) => {
    const carritoActualizado = carrito.filter((item) => item.id !== id);
    setCarrito(carritoActualizado);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalUnidades = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acumulador, item) => acumulador + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito, totalUnidades, totalPrecio }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;