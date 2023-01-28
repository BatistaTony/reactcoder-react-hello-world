import { useEffect, useState, useRef } from "react";
import ListProductos from "./components/ListaProductos";


const KEY_LISTA_PRODUCTOS = "LIST_PRODUCTOS"

function App() {

const inputRef = useRef()


 const [productos, setProductos] = useState([]);

 const addProducto = ()=> {
  const titulo = inputRef.current.value;

  console.log(inputRef.current.value);

  const id = productos.length * 5;
  const novaList = [...productos, { id, titulo }]

  setProductos(novaList)

  inputRef.current.value = ""
 }

 const removerProducto = (id)=> {
  const novaLista = productos.filter(producto=> producto.id !== id)

  setProductos(novaLista)
 }

 useEffect(()=> {
  const productosSalvados = JSON.parse(localStorage.getItem(KEY_LISTA_PRODUCTOS));

  if(productosSalvados.length) setProductos(productosSalvados);
 }, [])

 useEffect(() => {

  localStorage.setItem(KEY_LISTA_PRODUCTOS, JSON.stringify(productos) );

 }, [productos]);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={addProducto}>adicionar</button>
      <ListProductos productos={productos} removerProducto={removerProducto} />
    </div>
  );
}

export default App;
