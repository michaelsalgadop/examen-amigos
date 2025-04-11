import { useContext, useState } from "react";
import { Formulario } from "./Formulario";
import { Titulo } from "./Titulo";
import { AmigosContext } from "../context/AmigosContext";
import { Button, Col, Row } from "react-bootstrap";

export const Cabecera = (props) => {
  const { setFormularioAbierto, formularioAbierto } = useContext(AmigosContext);
  return (
    <header>
      <Titulo></Titulo>
      <Row className="form-group">
        <Col>
          {formularioAbierto ? (
            <Formulario
              setFormularioAbierto={setFormularioAbierto}
              formularioAbierto={formularioAbierto}
            ></Formulario>
          ) : (
            <Button
              variant="primary"
              onClick={() => setFormularioAbierto(!formularioAbierto)}
            >
              Crear amigo
            </Button>
          )}
        </Col>
      </Row>
    </header>
  );
};
