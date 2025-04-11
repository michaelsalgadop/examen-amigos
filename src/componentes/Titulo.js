import { useContext } from "react";
import { AmigosContext } from "../context/AmigosContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Titulo = () => {
  const { listaAmigos } = useContext(AmigosContext);
  return (
    <Row>
      <Col as="h1">Gestión de mis {listaAmigos.length} amigos</Col>
    </Row>
  );
};
