import React, {useContext} from 'react'
import { Button, Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import ProductContext from '../context/ProductContext';



export default function CardPizza(props) {
  const {setProducts} = useContext(ProductContext)
  return (
    <Card className='CardProds'>
      <img variant="top" src={props.item.imagen1} className="imgProds" />
      <Card.Body>
      <Form.Control key="titulo" type="text" placeholder={props.item.titulo} className="mb-3 p-3 text-center fw-bold fs-5" disabled readOnly />
        <div className='CardText'>
          <b>Descripción:</b>
          <div >
          {props.item.descripcion}
          </div>
        </div>
        
      <ListGroup className="list-group-flush">
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item>Precio: ${props.item.precio}</ListGroup.Item>
      </ListGroup>

      <div className='d-flex justify-content-evenly'>
        <Link to={`/Plantas/${props.item.id}`}><Button variant="secondary" >Ver Más</Button></Link>
        {<Button variant="primary"  onClick={e => setProducts(current => 
          [...current,{
              id:props.item.id,
              name:props.item.titulo,
              price:Number(props.item.precio),
              qty:1}])}>Añadir</Button>}
      </div>
      
      </Card.Body>
    </Card>
  )
}
