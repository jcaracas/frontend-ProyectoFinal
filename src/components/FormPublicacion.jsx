import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useContext } from "react";
import Context from '../context/Context';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";



function FormProducts() {
    const [images, setImages] = useState([]);
    const  setUsuario  = useContext(Context);
    const navigate = useNavigate();
    
    
    
    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        
      };
      const handleChange = (e) => {
        setImages((images) => [...images, URL.createObjectURL(e.files[0])]);
        return URL.revokeObjectURL(e.files[0])
        }
    
      const deleteImage = (blob) => {
        setImages(images.filter(x => x !== blob));
        document.getElementById("cargaImg").value = "";   
      };
      const cancelar = ()=>{
        navigate("/");
      }
    
    return(
        <div>
            <Form.Control key="titulo" type="text" placeholder="Nueva Publicación" className="mb-3 p-3 text-center may" disabled readOnly />

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
                            <Form.Control name="stock" type="text" placeholder="Stock" required onChange={handleSetUsuario}/>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel key="selectCat" controlId="SelectCategoria" label="Seleccione Categoria">
                            <Form.Select  aria-label="Seleccione Categoria" onChange={handleSetUsuario}>
                                <option></option>
                                <option value="1">Gomero</option>
                                <option value="2">Gardenia</option>
                                <option value="3">Dolar Argentino</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    
                </Row>
                <FloatingLabel key="descrio" controlId="floatingTextarea2" label="Descripción">
                    <Form.Control type="textarea" placeholder="..." name="descripcion" style={{ height: '100px' }} onChange={handleSetUsuario}/>
                </FloatingLabel>
                <div className='mt-3 mb-3'>
                    <Form.Control key="img" id='cargaImg' type="file" name='img' placeholder="Subir un archivo en JPG" className="p-3"  onChange={(e) => handleChange(e.target) } accept=".jpg, .jpeg, .png"/>
                </div>
                
                
            </div>
            <div className='divPerfil'>
                {images.map((row, index) =>
                    <div key={index} className='divImgPerfil'>
                        <img src={row} alt={row} className='imgPerfil'/>
                        <div class="fa-sharp fa-solid fa-trash" onClick={() => deleteImage(row)}></div>
                        </div>
                    )}

            
            </div>
            <Button variant="dark" >Guardar</Button>{' '}
                <Button variant="secondary" onClick={cancelar}>Cancelar</Button>
        </div>
    )
}

export default FormProducts;