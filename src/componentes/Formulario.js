import { useContext, useState } from "react";
import { useFormulario } from "../hooks/useFormulario";
import { AmigosContext } from "../context/AmigosContext";
import { Button, Col, Form } from "react-bootstrap";

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
    <Form
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
      <Col sm={3}>
        <Form.Label className="label-amigo" htmlFor="nombre">
          Nombre:
        </Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          id="nombre"
          value={datosFormulario.nombre}
          onChange={setData}
          className="campo-amigo"
        />
      </Col>
      <Col sm={3}>
        <Form.Label className="label-amigo" htmlFor="apellido">
          Apellido:
        </Form.Label>
        <Form.Control
          type="text"
          name="apellido"
          value={datosFormulario.apellido}
          id="apellido"
          onChange={setData}
          className="campo-amigo"
        />
      </Col>
      <Col sm={2}>
        <Form.Label className="label-amigo" htmlFor="valoracion">
          Valoración:
        </Form.Label>
        <Form.Select
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
        </Form.Select>
      </Col>
      <Col>
        <Button type="submit" variant="primary">
          {datosFormulario.id ? "Editar" : "Crear"}
        </Button>
        <Button
          type="button"
          variant="primary"
          onClick={() => setFormularioAbierto(!formularioAbierto)}
        >
          Cancelar
        </Button>
      </Col>
    </Form>
  );
};
