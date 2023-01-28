import ItemProducto from "./item-producto";

const ListProductos = ({ productos, removerProducto }) => {
  return (
    <div>
      {productos.map((producto) => (
        <ItemProducto
          key={producto.id}
          producto={producto}
          removerProducto={() => removerProducto(producto.id)}
        />
      ))}
    </div>
  );
};

export default ListProductos;
