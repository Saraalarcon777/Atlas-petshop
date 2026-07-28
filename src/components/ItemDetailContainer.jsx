import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  const { productoId } = useParams();

  useEffect(() => {
    setCargando(true);

    const traerProducto = async () => {
      const docRef = doc(db, 'productos', productoId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProducto({ id: docSnap.id, ...docSnap.data() });
      } else {
        setProducto(null);
      }

      setCargando(false);
    };

    traerProducto();
  }, [productoId]);

  if (cargando) {
    return <p className="mensaje-carga">Cargando producto...</p>;
  }

  if (!producto) {
    return <p className="mensaje-carga">Ese producto no existe.</p>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;