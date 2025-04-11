import { useCallback, useEffect, useState } from "react";
import { Amigos } from "./componentes/Amigos";
import { Cabecera } from "./componentes/Cabecera";
import { AmigosContext } from "./context/AmigosContext";
import { Container } from "react-bootstrap";

function App() {
  const [listaAmigos, setListaAmigos] = useState([]);
  const urlApiAmigos = process.env.REACT_APP_APP_AMIGOS;
  const [formularioAbierto, setFormularioAbierto] = useState(false);
  const amigoVacio = {
    id: null,
    nombre: "",
    apellido: "",
    valoracion: 0,
  };
  const [amigoEditar, setAmigoEditar] = useState(amigoVacio);
  const getListaAmigos = useCallback(async () => {
    try {
      const response = await fetch(urlApiAmigos);
      if (!response.ok)
        throw new Error("No se han devuelto los datos esperados");
      const datos = await response.json();
      setListaAmigos(datos);
    } catch (error) {
      console.error(error.message);
    }
  }, [urlApiAmigos]);
  const crearAmigo = async (amigoNuevo) => {
    try {
      amigoNuevo.id = (listaAmigos.length + 1).toString();
      const response = await fetch(urlApiAmigos, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(amigoNuevo),
      });
      if (!response.ok)
        throw new Error("No se han devuelto los datos esperados");
      const datos = await response.json();
      setListaAmigos([...listaAmigos, datos]);
      setFormularioAbierto(!formularioAbierto);
      limpiarAmigo();
    } catch (error) {
      console.error(error.message);
    }
  };
  const editarAmigo = async (amigoActualizado) => {
    try {
      const response = await fetch(urlApiAmigos + amigoActualizado.id, {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(amigoActualizado),
      });
      if (!response.ok)
        throw new Error("No se han devuelto los datos esperados");
      setListaAmigos([
        ...listaAmigos.map((amigo) =>
          amigo.id === amigoActualizado.id
            ? { ...amigo, ...amigoActualizado }
            : amigo
        ),
      ]);
      setFormularioAbierto(!formularioAbierto);
      limpiarAmigo();
    } catch (error) {
      console.error(error.message);
    }
  };
  const eliminarAmigo = async (amigoEliminado) => {
    try {
      const response = await fetch(urlApiAmigos + amigoEliminado.id, {
        method: "DELETE",
      });
      if (!response.ok)
        throw new Error("No se han devuelto los datos esperados");
      setListaAmigos(
        listaAmigos.filter((amigo) => amigo.id !== amigoEliminado.id)
      );
    } catch (error) {
      console.error(error.message);
    }
  };
  const limpiarAmigo = () => setAmigoEditar(amigoVacio);
  useEffect(() => {
    getListaAmigos();
  }, [getListaAmigos]);
  return (
    <AmigosContext.Provider
      value={{
        listaAmigos,
        crearAmigo,
        editarAmigo,
        eliminarAmigo,
        formularioAbierto,
        setFormularioAbierto,
        amigoEditar,
        setAmigoEditar,
      }}
    >
      <Container className="container">
        <Cabecera></Cabecera>
        <main>
          <Amigos></Amigos>
        </main>
      </Container>
    </AmigosContext.Provider>
  );
}

export default App;
