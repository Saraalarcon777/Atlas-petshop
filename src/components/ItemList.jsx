import Item from './Item';

function ItemList({ productos }) {
  return (
    <div className="grilla-productos">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;