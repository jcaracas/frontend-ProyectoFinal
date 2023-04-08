import {React,useState,useEffect} from 'react'
import CardCompra from '../components/CardCompra'
import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Context from '../context/Context';
import { useContext } from "react";
import axios from "axios";


export default function Miscompras() { 
    const  setUsuario  = useContext(Context);
    const [db, setDb] = useState([]);
    const datosUser = localStorage.getItem("dataUser");
    const datos = JSON.parse(datosUser);
    

    useEffect(() => {
        GetallCompras();
    }, []);
    
    const GetallCompras = async () => {
      const urlServer = "http://localhost:3000/compras";
      const token = localStorage.getItem("token");
      try {
        const  {data}  = await axios.get(urlServer, {
         headers: { Authorization: "Bearer " + token }
      });
      setDb(data)
      } catch ({ response: { data: message } }) {
      alert(message + " No hay data");
      console.log(message);
      }
    };
    return (
      <>     
        <Fragment>
          <Container fluid className="mt-4 d-flex justify-content-center align-items-center">
            <Row className="w-100">
              <Col xs={10} md={8} lg={10} className="mx-auto">
                <Card className="text-center sombra">
                  <Card.Body>
                    <div className='divPerfil'>
                      <div key="img" className='divImgPerfil'>
                          <div className='imgPerfil'></div>
                      </div>
                      <Form.Control key="titulo" type="text" id='tituloCabecera' placeholder={ datos.nombre } className="mb-3 p-3 text-center may" disabled readOnly />
                    </div>
            
                    {['lg'].map((expand) => (
                      <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                        <Container fluid>
                          <Navbar.Brand href="#">MIS COMPRAS</Navbar.Brand>
                          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >
                            <Offcanvas.Header closeButton>
                              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}> Mis Compras </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                              <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action2">Total: </Nav.Link>
                                <NavDropdown title="Filtro" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                                  <NavDropdown.Item href="#action3">Este mes</NavDropdown.Item>
                                  <NavDropdown.Item href="#action4">Mes Anterior</NavDropdown.Item>
                                  <NavDropdown.Item href="#action5">Este año</NavDropdown.Item>
                                  <NavDropdown.Item href="#action5">Año Anterior</NavDropdown.Item>
                                  <NavDropdown.Item href="#action5">Todo</NavDropdown.Item>
                                </NavDropdown>
                              </Nav>
                              <Form className="d-flex">
                                <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
                                <Button variant="outline-success"><i class="fa-solid fa-magnifying-glass"></i></Button>
                              </Form>
                            </Offcanvas.Body>
                          </Navbar.Offcanvas>
                        </Container>
                      </Navbar>
                    ))}
                    
                      {db.map((item) =>
                        (<li key="{item.id}" className='mt-3'>
                            <CardCompra item={item} />
                        </li>)
                      )}      
                    </Card.Body>              
                  </Card>
                </Col>
              </Row>
            </Container>
        </Fragment>
      </>
    )
}
