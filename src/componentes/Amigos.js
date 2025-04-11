import { useContext } from "react";
import { Amigo } from "./Amigo";
import { AmigosContext } from "../context/AmigosContext";

export const Amigos = (props) => {
  const { listaAmigos } = useContext(AmigosContext);
  return (
    <div className="row">
      {listaAmigos.map((amigo) => (
        <Amigo key={amigo.id} amigo={amigo}></Amigo>
      ))}
    </div>
  );
};
