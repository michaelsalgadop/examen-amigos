import { useContext } from "react";
import { AmigosContext } from "../context/AmigosContext";

export const Titulo = () => {
  const { listaAmigos } = useContext(AmigosContext);
  return (
    <div className="row">
      <h1 className="col">Gestión de mis {listaAmigos.length} amigos</h1>
    </div>
  );
};
