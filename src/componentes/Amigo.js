import { useContext } from "react";
import { AmigosContext } from "../context/AmigosContext";
import { FaPencil } from "react-icons/fa6";
import { FaStar, FaTimes } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

export const Amigo = (props) => {
  const { amigo } = props;
  const {
    eliminarAmigo,
    formularioAbierto,
    setFormularioAbierto,
    setAmigoEditar,
  } = useContext(AmigosContext);
  const actualizarAmigo = () => {
    setFormularioAbierto(!formularioAbierto);
    setAmigoEditar(amigo);
  };
  return (
    <Col xs={4}>
      <article className="amigo">
        <Row>
          <Col xs={12} className="text-right">
            <FaPencil onClick={actualizarAmigo}></FaPencil>
            <FaTimes
              className="ml-1"
              onClick={() => eliminarAmigo(amigo)}
            ></FaTimes>
          </Col>
          <Col xs={12}>
            <ul>
              <li className="list-unstyled">Nombre: {amigo.nombre}</li>
              <li className="list-unstyled">Apellido: {amigo.apellido}</li>
              <li className="list-unstyled">
                Valoración:
                {new Array(amigo.valoracion).fill("").map((valoracion, i) => (
                  <FaStar key={i}></FaStar>
                ))}
              </li>
            </ul>
          </Col>
        </Row>
      </article>
    </Col>
  );
};
