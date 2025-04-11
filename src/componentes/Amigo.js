import { useContext } from "react";
import { AmigosContext } from "../context/AmigosContext";

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
            <i className="fas fa-pen" onClick={actualizarAmigo}></i>
            <i
              className="fas fa-times ml-1"
              onClick={() => eliminarAmigo(amigo)}
            ></i>
          </div>
          <div className="col-12">
            <ul>
              <li className="list-unstyled">Nombre: {amigo.nombre}</li>
              <li className="list-unstyled">Apellido: {amigo.apellido}</li>
              <li className="list-unstyled">
                Valoración:
                {new Array(amigo.valoracion).fill("").map((valoracion, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};
