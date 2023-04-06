import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import Context from "../context/Context";
import ProductContext from '../context/ProductContext';



function Header() {
  const navigate = useNavigate();
  const { products} = useContext(ProductContext)
  const { usuario, setUsuario } = useContext(Context);
  
  const token = localStorage.getItem("token");
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Market Place Garden</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link ><Link to="/" className="text-white ms-3 text-decoration-none">Home</Link></Nav.Link>
            {!token ? (
              <div className='d-flex justify-content-between'>
                <Nav.Link><Link to="/Signin" className="text-white ms-3 text-decoration-none">Login</Link></Nav.Link>
                <Nav.Link><Link to="/Registrar" className="text-white ms-3 text-decoration-none">Registrarme</Link></Nav.Link>
              </div>              
            ) : (
              <NavDropdown className="text-white ms-3 text-decoration-none" title="Mi perfil" id="navbarScrollingDropdown">
                <NavDropdown.Item ><Link to="/Perfil" className="ms-3 text-decoration-none">Editar Pefil</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/usuario/miscompras" className="ms-3 text-decoration-none">Mis compras</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/usuario/productos" className="ms-3 text-decoration-none">Mis Publicaciones</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" onClick={logout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>   
            )}         
          </Nav>
          <Form className="d-flex ">
              <div className='divCar'>
                <Link to={`/Carrito`} >  🛒 { products.reduce((x,s)=> x + s.price,0) }</Link>
              </div>
            
          
            <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
            <Button variant="dark"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;