import { useContext, useState } from "react";
import { useFormulario } from "../hooks/useFormulario";
import { AmigosContext } from "../context/AmigosContext";

export const Formulario = () => {
  const {
    editarAmigo,
    crearAmigo,
    setFormularioAbierto,
    formularioAbierto,
    amigoEditar,
  } = useContext(AmigosContext);
  const [amigo, setAmigo] = useState(amigoEditar);
  const { setData, datosFormulario } = useFormulario(amigo);

  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault();
        if (amigo.id) {
          editarAmigo({
            ...datosFormulario,
            valoracion: +datosFormulario.valoracion,
          });
        } else {
          crearAmigo({
            ...datosFormulario,
            valoracion: +datosFormulario.valoracion,
          });
        }
      }}
    >
      <div className="col-sm-3">
        <label className="label-amigo" htmlFor="nombre">
          Nombre:
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={datosFormulario.nombre}
          onChange={setData}
          className="campo-amigo form-control"
        />
      </div>
      <div className="col-sm-3">
        <label className="label-amigo" htmlFor="apellido">
          Apellido:
        </label>
        <input
          type="text"
          name="apellido"
          value={datosFormulario.apellido}
          id="apellido"
          onChange={setData}
          className="campo-amigo form-control"
        />
      </div>
      <div className="col-sm-2">
        <label className="label-amigo" htmlFor="valoracion">
          Valoración:
        </label>
        <select
          name="valoracion"
          id="valoracion"
          onChange={setData}
          value={datosFormulario.valoracion}
          className="campo-amigo form-control"
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-primary">
          {datosFormulario.id ? "Editar" : "Crear"}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setFormularioAbierto(!formularioAbierto)}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
