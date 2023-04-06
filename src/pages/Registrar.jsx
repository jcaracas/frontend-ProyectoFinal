import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import FormRegister from "../components/FormRegister";
import Card from 'react-bootstrap/Card';


const Registrar = () => {
  return (
    <Fragment>
      <Container fluid className="mt-4 d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col xs={10} md={8} lg={10} className="mx-auto">
            <Card className="text-center sombra">
                <Card.Body>
                    <FormRegister />
                </Card.Body>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Registrar;