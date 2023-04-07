import {React} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CardCompra(props) {
    
  return (
    <>
      
      <Card >
        <Card.Body className='d-flex justify-content-evenly flex-row gap-3'>
            <img className='imgCompras' variant="top" src={props.item.imagen1} alt='NO existe'/>
            <div className='desCompra'>
                <Card.Title >{props.item.titulo}</Card.Title>
            </div>
            <div className='sectionButtons mt-1'>
                <div className='sectionButtons d-flex flex-column justify-content-around'>
                    <Button variant="primary" className='m-auto p-1 btn-compra'>Volver a Comprar</Button>
                </div>
            </div>
        </Card.Body>
      </Card>
    </>
    
  )
}
