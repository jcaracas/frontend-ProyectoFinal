import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import FormLogin from "../components/FormLogin"
import Card from 'react-bootstrap/Card';


const Signin = () => {
  return (
    <Fragment>
      <Container fluid className="page mt-5 d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col xs={10} md={8} lg={4} className="mx-auto">
            <Card className="text-center sombra">
              <Card.Header> <h2>Bienvenido</h2> </Card.Header>
              <Card.Body>
                <FormLogin />
              </Card.Body>              
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Signin;