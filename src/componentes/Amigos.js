import { useContext } from "react";
import { Amigo } from "./Amigo";
import { AmigosContext } from "../context/AmigosContext";
import { Row } from "react-bootstrap";
export const Amigos = (props) => {
  const { listaAmigos } = useContext(AmigosContext);
  return (
    <Row>
      {listaAmigos.map((amigo) => (
        <Amigo key={amigo.id} amigo={amigo}></Amigo>
      ))}
    </Row>
  );
};
