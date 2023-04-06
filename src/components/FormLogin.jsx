import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from '../context/Context';
import axios from "axios";


function Login() {

  const { setUsuario } = useContext(Context);
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
    
  };

  const iniciarSesion = async () => {
    const urlServer = "https://ecommerce.juanpenailillo.repl.co/login/";
    //const endpoint = "/login";
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const { data: token } = await axios.post(urlServer, usuario);
      alert("Usuario identificado con éxito 😀");
      console.log(token);
      localStorage.setItem("token", token);
      setUsuario()
      navigate("/");
      
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };

  return (
    <div>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <FloatingLabel key="emailUser" controlId="floatingInput2" label="Email" className="mb-3" >
            <Form.Control type="email" placeholder="Ingresa tu email" name='email' defaultValue={usuario.email} onChange={handleSetUsuario} />
        </FloatingLabel>
        <Form.Text className="text-muted">Nunca compartiremos tu correo electrónico con nadie más.</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
        <FloatingLabel key="pass"   label="Password" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Ingresa tu Password" id='passwd' name="password" value={usuario.password} onChange={handleSetUsuario}/>
        </FloatingLabel>
      </Form.Group>
      
      <Button variant="dark" type="submit" onClick={iniciarSesion} >
        Iniciar Sesión
      </Button>
    </div>
  );
}

export default Login;