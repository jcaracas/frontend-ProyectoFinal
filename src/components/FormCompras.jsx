import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Compras from './Compras';
import { useContext } from "react";
import Context from '../context/Context';


function FormCompras() {
    const  setUsuario  = useContext(Context);
    const datosUser = localStorage.getItem("dataUser");
    const datos = JSON.parse(datosUser);

    return (
        <Form >
            <div className='divPerfil'>
                <div key="img" className='divImgPerfil'>
                    <div className='imgPerfil'></div>
                </div>
                <Form.Control key="titulo" type="text" id='tituloCabecera' placeholder={ datos.nombre } className="mb-3 p-3 text-center may" disabled readOnly />
            </div>
            <div className='cabeceraComras'>
                <Compras />
            </div>

            <div className='detalleCompras'>
            {['listaCompras'].map((compra) => (
                <Card className='text-md-start mb-2' key={compra}>
                    <Card.Header > 
                        <div className='d-flex justify-content-between'>
                            <div><strong>Fecha de Compra</strong></div> 
                            <div className='vc-vistaTlef'><a href="/#">Volver a Comprar</a> </div>
                        </div>
                    </Card.Header>
                    <Card.Body className='d-flex justify-content-evenly flex-row gap-3'>
                        <img className='imgCompras' variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a3b3c26ba11f450a9f91ae9b00f43cb9_9366/Zapatillas_Galaxy_6_Negro_GW3847_01_standard.jpg" alt='NO existe'/>
                        <div className='desCompra'>
                            <Card.Title >Estado de Compra</Card.Title>
                            <div>Nombre del producto</div>                        
                            <div>Descripción del Producto</div>
                        </div>
                        <Card.Text className='detVende '>
                            Datos del Vendedor
                        </Card.Text>
                        <div className='sectionButtons mt-1'>
                            <div className='sectionButtons d-flex flex-column justify-content-around'>
                                <Button variant="primary" className='m-auto p-1 btn-compra'>Volver a Comprar</Button>
                                <Button variant="secondary" className='m-auto p-1 btn-compra'>Detalle</Button>
                            </div>
                        </div>
                        
                        
                    </Card.Body>
                </Card>
            ))}
            </div>

        </Form>
    )
}

export default FormCompras;