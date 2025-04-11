import { useContext, useState } from "react";
import { Formulario } from "./Formulario";
import { Titulo } from "./Titulo";
import { AmigosContext } from "../context/AmigosContext";

export const Cabecera = (props) => {
  const { setFormularioAbierto, formularioAbierto } = useContext(AmigosContext);
  return (
    <header>
      <Titulo></Titulo>
      <div className="row form-group">
        <div className="col">
          {formularioAbierto ? (
            <Formulario
              setFormularioAbierto={setFormularioAbierto}
              formularioAbierto={formularioAbierto}
            ></Formulario>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => setFormularioAbierto(!formularioAbierto)}
            >
              Crear amigo
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
