import {React,useState,useEffect,useContext} from 'react'
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ProductContext from '../context/ProductContext';
import Card from 'react-bootstrap/Card';
import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"


export default function Plantas() {
  const { id } = useParams();
  const [info, setInfo] = useState([])
  const {setProducts} = useContext(ProductContext)
  
  useEffect(() => {
    getPizza()
  }, []);

  
  const getPizza = async () => {
    const data = await fetch(`https://ecommerce.juanpenailillo.repl.co/productos/${id}`)
    const users = await data.json()
    setInfo(users)
  };

  return (
    <Fragment>
      <Container fluid className="mt-4 d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col xs={10} md={8} lg={10} className="mx-auto">
            <Card className="text-center sombra">
              {
                info.map(detalle =>
                        <div div key={detalle.id } className="CardDetalle">
                        <img src={ detalle.imagen1} alt="" className="imgDetalle" />
                        <div className="detDescripcion">
                          <Card.Title className="titulo"><h1>{ detalle.titulo}</h1></Card.Title>
                          <Card.Text>
                              {detalle.descripcion}
                          </Card.Text>
                          <p>Precio: ${detalle.precio}</p>
                        </div>
                        {<Button variant="secondary"  onClick={e => setProducts(current => 
                            [...current,{
                                  id:detalle.id,
                                  name:detalle.titulo,
                                  price:Number(detalle.precio),
                                  qty:1
                            }])}>Añadir 🛒</Button>}
                        </div>
                      )


              }

          </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}
