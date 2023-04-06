import React, { Fragment } from 'react'
import { Col, Container, Row } from "react-bootstrap"


export default function Success() {
  return (
    <>
      <Fragment>
      <Container fluid className="page min-vh-100 d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col xs={10} md={8} lg={4} className="mx-auto">
            <h1>¡Felicidades por tu compra!</h1>
            <p>Te avisamos por correo la fecha de entrega de el envío de tu compra</p>
            <a href='/'>Volver al home</a> | <a href='/usuario/miscompras'>Ir a mis compras</a>
        </Col>
        </Row>
      </Container>
    </Fragment>
    </>
  )
}
