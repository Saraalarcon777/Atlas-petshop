import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from './ItemList';

function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setCargando(true);

    const traerProductos = async () => {
      const coleccionRef = collection(db, 'productos');
      const snapshot = await getDocs(coleccionRef);

        const productosTraidos = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));

      if (categoriaId) {
        const filtrados = productosTraidos.filter((p) => p.categoria === categoriaId);
        setListaProductos(filtrados);
      } else {
        setListaProductos(productosTraidos);
      }

      setCargando(false);
    };

    traerProductos();
  }, [categoriaId]);

  if (cargando) {
    return <p className="mensaje-carga">Cargando productos...</p>;
  }

  if (listaProductos.length === 0) {
    return <p className="mensaje-carga">No hay productos en esta categoría.</p>;
  }

  return (
    <div>
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : 'Todos los productos'}</h2>
      <ItemList productos={listaProductos} />
    </div>
  );
}

export default ItemListContainer;