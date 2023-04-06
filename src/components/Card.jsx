import React from 'react'
import {Card} from 'react-bootstrap'

function Cards(name, desc, img, price) {
  return (
    <Card style={{ borderRadius: '15px'}} className="shadow-sm">
      <Card.Header>
        <Card.Img src={img} className="card-img-fluid"
        style={{objectFit: 'cover', height:'220px'}}/>
      </Card.Header>
      <Card.Body>
        <h3 className="card-title">{name}</h3>
        <p className='card-text'>{desc}</p> 
      </Card.Body>
      <Card.Footer style={{position: 'relative'}} className="bg-body d-flex justify-content-between align-items-center">
        <div><strong>$ {price}</strong></div>
        <div style ={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          padding: '5px 15px',
          background: '#9DC08B',
          borderRadius: '15px 0px',
          transform: 'rotate(-0.27deg)'
        }}>
          Añadir al carrito
        </div>
      </Card.Footer>
    </Card>
  )
}
 export default Cards;