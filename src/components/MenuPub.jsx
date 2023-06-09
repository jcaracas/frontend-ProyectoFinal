import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


function Compras() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">MIS PUBLICACIONES</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}> Mis Publicaciones</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Button variant="outline-success">
                    <Nav.Link ><Link to="/usuario/publicacion" className="text-black ms-3 text-decoration-none">Nueva Publicación</Link></Nav.Link>
                  </Button>
                  <NavDropdown title="Filtro" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <NavDropdown.Item href="#action3">Todas</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Activas</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Inactivas</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Pausadas</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">En Revisión</NavDropdown.Item>
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
    </>
  );
}

export default Compras;