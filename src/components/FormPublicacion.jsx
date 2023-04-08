import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import axios from "axios";



function FormProducts() {
    const datosUser = localStorage.getItem("dataUser");
    const datos = JSON.parse(datosUser);
    
    const navigate = useNavigate();
    const [publicacion, setUPublicacion] = useState({"usuario_id":datos.id});

    
    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        if (name==='categoria_id') {
            let newValue=parseInt(value)
            field[name] = newValue;
            console.log(newValue);
        }else{
            if (name==='stock') {
                let newValue=parseInt(value)
                field[name] = newValue;
                console.log(newValue);
            }
            field[name] = value;
        }
        setUPublicacion({ ...publicacion, ...field });
    };
      
      const cancelar = ()=>{
        navigate("/");
      }
      const guardarPublicacion = async () => {
        const urlServer = "http://localhost:3000/usuario/publicaciones";
        try {
          await axios.post(urlServer, publicacion);
          alert("Publicacion registrada con éxito");
          navigate("/");
        } catch (error) {
          alert("Algo salió mal ...");
          console.log(error);
        }
      };
    
    return(
        <div>
            <Form.Control key="titulo" type="text" placeholder="Ingresar Nueva Publicación" className="mb-3 p-3 text-center may" disabled readOnly />
            <div>
                <FloatingLabel key="titulo" controlId="InputTitulo" label="Titulo" className="mb-3" >
                    <Form.Control name="titulo" type="text" placeholder="Titulo" required onChange={handleSetUsuario}/>
                </FloatingLabel>
                <Row>
                    <Col>
                        <FloatingLabel key="precio" controlId="InputPrecio" label="Precio" className="mb-3" >
                            <Form.Control name="precio" type="text" placeholder="Precio del Producto" required onChange={handleSetUsuario}/>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel key="stock" controlId="InputPrecio" label="Stock" className="mb-3" >
                            <Form.Control name="stock" type="number" placeholder="Stock" required onChange={handleSetUsuario}/>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel key="selectCat" controlId="SelectCategoria" label="Seleccione Categoria">
                            <Form.Select  aria-label="Seleccione Categoria" name='categoria_id' onChange={handleSetUsuario}>
                                <option></option>
                                <option typeof='number' value="1">Gomero</option>
                                <option value="2">Gardenia</option>
                                <option value="3">Dolar Argentino</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    
                </Row>
                <FloatingLabel key="descrio" controlId="floatingdescrip" label="Descripción">
                    <Form.Control type="textarea" placeholder="..." name="descripcion" style={{ height: '100px' }} onChange={handleSetUsuario}/>
                </FloatingLabel>

                <FloatingLabel key="img" controlId="floatingImg" label="Cargar URL de la imagen" className='mt-3 mb-3'>
                    <Form.Control name="imagen1" type="text" placeholder="Inserte una imagen" required onChange={handleSetUsuario}/>
                </FloatingLabel>
            </div>
            
            <Button variant="dark" onClick={guardarPublicacion} >Guardar</Button>{' '}
                <Button variant="secondary" onClick={cancelar}>Cancelar</Button>
        </div>
    )
}

export default FormProducts;