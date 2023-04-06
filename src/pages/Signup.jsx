import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import FormRegister from "../components/FormRegister"


export default() => {
  return (
    <Fragment>
      <Container fluid className="page min-vh-100 d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col xs={10} md={8} lg={4} className="mx-auto">
            <FormRegister />
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}