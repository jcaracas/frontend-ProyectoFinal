import {React,useContext} from 'react'
import {useNavigate} from "react-router-dom";
import ProductContext from '../context/ProductContext';
import { Button, Form } from "react-bootstrap";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Carritos() {
  const { products} = useContext(ProductContext)
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  let botones;

    async function enviarFormulario(e) {
      e.preventDefault()
       
      const endpoint = "http://localhost:3000/comprar/";
      let objProduct = products;
      const response = await fetch(endpoint, { method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                            }, body: JSON.stringify(objProduct) });
      console.log(response)
      navigate("/success");
    } 
    if(token){  botones = <><Button className='btn btn-info text-center' onClick={enviarFormulario} >Pagar</Button></>
    }else{ botones = <><h5>Debe estar logueado para finalizar la compra</h5></> }

  return (
    <Fragment>
      <Container fluid className="mt-4 d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col xs={10} md={8} lg={10} className="mx-auto">
            <Card className="text-center sombra">
              <Card.Body>   
                <Form.Control key="titulo" type="text" placeholder="Detalle del Pedido" className="mb-3 p-3 text-center may" disabled readOnly />
                <div className='text-center'>
                  <ul>
                    { products.map(item =>
                            <div className='row'>
                              <div className='col-sm' style={{textAlign: "left"}}>{item.name}</div>
                              <div className='col-sm'>{item.price}</div>
                            </div>)
                    }
                  </ul>
                </div>
                <div className='text-center'>
                  <h5>TOTAL: { products.reduce((x,s)=> x + s.price,0) }</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <div className='text-center mt-2'>
                  {botones}
          </div>
        </Row>
      </Container>
    </Fragment>
  )
}
