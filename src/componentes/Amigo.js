import { useContext } from "react";
import { AmigosContext } from "../context/AmigosContext";
import { FaPencil } from "react-icons/fa6";
import { FaStar, FaTimes } from "react-icons/fa";

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
    <div className="col-4">
      <article className="amigo">
        <div className="row">
          <div className="col-12 text-right">
            <FaPencil onClick={actualizarAmigo}></FaPencil>
            <FaTimes
              className="ml-1"
              onClick={() => eliminarAmigo(amigo)}
            ></FaTimes>
          </div>
          <div className="col-12">
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
          </div>
        </div>
      </article>
    </div>
  );
};
