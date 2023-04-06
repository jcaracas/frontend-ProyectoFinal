import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Menu from './MenuPub';
import { useContext } from "react";
import Context from '../context/Context';


function FormProducts() {
    const  setUsuario  = useContext(Context);
    
    return(
        <div>
            <div className='divPerfil'>
                <div key="img" className='divImgPerfil'>
                    <div className='imgPerfil'></div>
                </div>
                <Form.Control key="titulo" type="text" id='tituloCabecera' placeholder={ setUsuario.usuario.nombre } className="mb-3 p-3 text-center may" disabled readOnly />
            </div>
            <div className='cabeceraComras'>
                <Menu />
            </div>

            <div className='detalleCompras'>
                {['listaCompras'].map((compra) => (
                    <Card className='text-md-start mb-2' key={compra}>
                        <Card.Header > 
                            <div className='d-flex justify-content-between'>
                                <div><strong>Fecha de Publicación</strong></div> 
                                <div className='vc-vistaTlef'><a href="/#">Volver a Comprar</a> </div>
                            </div>
                        </Card.Header>
                        <Card.Body className='d-flex justify-content-evenly flex-row gap-3'>
                            <img className='imgCompras' variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a3b3c26ba11f450a9f91ae9b00f43cb9_9366/Zapatillas_Galaxy_6_Negro_GW3847_01_standard.jpg" alt='NO existe'/>
                            <div className='desCompra'>
                                <Card.Title >Estado de Publicacion</Card.Title>
                                <div>Nombre del producto</div>                        
                                <div>Descripción del Producto</div>
                            </div>
                            <Card.Text className='detVende '>
                                Stock Disponible
                            </Card.Text>
                            <div className='sectionButtons mt-1'>
                                <div className='sectionButtons d-flex flex-column justify-content-around'>
                                    <Button variant="primary" className='m-auto p-1 btn-compra'>Cambiar Estado</Button>
                                    <Button variant="secondary" className='m-auto p-1 btn-compra'>Eliminar</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default FormProducts;