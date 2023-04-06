import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import axios from "axios";

function Registrar() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
  };

  const registrarUsuario = async () => {
    const urlServer = "https://ecommerce.juanpenailillo.repl.co/usuarios";
    //const endpoint = "/usuarios";
    try {
      await axios.post(urlServer, usuario);
      alert("Usuario registrado con éxito");
      navigate("/Signin");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };


  return (
    <div  >
      <Form.Control key="titulo" type="text" placeholder="Registro de Usuario" className="mb-3 p-3 text-center may" disabled readOnly />
      
      <div >
          <FloatingLabel key="nombreComple" controlId="InputNombre" label="Nombre Completo" className="mb-3" >
              <Form.Control name="nombre" type="text" placeholder="Nombre completo" required onChange={handleSetUsuario}/>
          </FloatingLabel>
          <Row>
            <Col>
                <FloatingLabel key="rut" controlId="InputRut" label="Rut" className="mb-3" >
                  <Form.Control name="rut" type="text" placeholder="Ingrese su Rut" required onChange={handleSetUsuario}/>
                </FloatingLabel>
            </Col>
            <Col>
                <FloatingLabel key="emailUser" controlId="floatingInput2" label="Email" className="mb-3" >
                  <Form.Control type="email" placeholder="name@example.com" name='email' required onChange={handleSetUsuario}/>
              </FloatingLabel>
            </Col>
          </Row>
          
          
          <Row >
              <Col>
                  <FloatingLabel key="pass"   label="Password">
                      <Form.Control type="password" placeholder="Password" id='passwd' name="password" onChange={handleSetUsuario}/>
                  </FloatingLabel>
              </Col>
              <Col><span id="floatingPassword1">
                  <InputGroup className="mb-3">
                      <FloatingLabel key="pass2"  label=" Confirmar Password">
                          <Form.Control type="password" placeholder="Password" className="passwd1" />
                      </FloatingLabel>
                  </InputGroup>
                  </span>
              </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                <Form.Check type="checkbox" label="Recordarme" className="check"/>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>          
          <Button type="submit" variant="dark" onClick={registrarUsuario}>Registrarse</Button>
        </div>
    </div>
  );
};


export default Registrar;
