import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import productos from '../data/productos';

export async function subirProductos() {
  console.log('Empezando a subir productos...');
  console.log('Cantidad de productos a subir:', productos.length);

  try {
    for (const producto of productos) {
      await addDoc(collection(db, 'productos'), producto);
      console.log('Subido:', producto.nombre);
    }
    alert('Productos subidos con éxito');
  } catch (error) {
    console.error('Error al subir productos:', error);
    alert('Hubo un error, revisá la consola');
  }
}