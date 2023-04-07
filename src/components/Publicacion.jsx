import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Publicacion(props) {
    return (
        <Card className='text-md-start mb-2' key={props.item.id}>
                    <Card.Header > 
                        <div className='d-flex justify-content-between'>
                            <div><strong>Fecha de Publicación: {props.item.fecha}</strong></div> 
                            <div className='vc-vistaTlef'><a href="/#">Volver a Comprar</a> </div>
                        </div>
                    </Card.Header>
                    <Card.Body className='d-flex justify-content-evenly flex-row gap-3'>
                        <img className='imgCompras' variant="top" src={props.item.imagen1} alt='NO existe'/>
                        <div className='desCompra'>
                            <Card.Title >{props.item.titulo}</Card.Title>
                            <div>Estado: Activa</div>                        
                            <div>{props.item.descripcion}</div>
                        </div>
                        <Card.Text className='detVende '>
                            Stock Disponible: {props.item.stock}
                        </Card.Text>
                        <div className='sectionButtons mt-1'>
                            <div className='sectionButtons d-flex flex-column justify-content-around'>
                                <Button variant="primary" className='m-auto p-1 btn-compra'>Cambiar Estado</Button>
                                <Button variant="secondary" className='m-auto p-1 btn-compra'>Eliminar</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card> 
    )
}

export default Publicacion;