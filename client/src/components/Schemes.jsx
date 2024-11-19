import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import "./styles/Schemes.css"

function Schemes() {
    return (
        <div>
            <h2 className='heading'>Government Schemes</h2>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
        </div>
    )
}

export default Schemes;
