const ItemProducto = ({ producto, removerProducto }) => {
  return (
    <div>
      <div>{producto.titulo}</div>
      <button onClick={removerProducto}>Remover</button>
    </div>
  );
};

export default ItemProducto;
