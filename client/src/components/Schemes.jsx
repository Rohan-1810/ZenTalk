import "./styles/Schemes.css"
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Schemes() {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      {/* Centered Heading */}
      <h1 className="text-center mb-4">
        <strong>What Improves With Therapy</strong>
      </h1>

      {/* Cards Section */}
      <Container>
        <Row className="justify-content-center">
          {/* Card 1 */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: "35rem" }}>
              <Card.Body>
                <Card.Title>Relationships</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                Therapy helps you build relationships with your partner, family, and loved ones. It can help you move on from the ones that no longer work and stay for the ones that are worth it.
                </Card.Text>
                <Button variant="primary">Explore more</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: "35rem" }}>
              <Card.Body>
                <Card.Title>Confidence</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                Not able to speak your mind? Feeling judged by others? Or stuck at a point in life that is making you feel a step behind others. Online counseling can help you build confidence to thrive in life.
                </Card.Text>
                <Button variant="primary">Explore more</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: "35rem" }}>
              <Card.Body>
                <Card.Title>Stress</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Anxiety</Card.Subtitle> */}
                <Card.Text>
                Overwhelmed by stress? Our stress therapy services offer a compassionate and effective approach to help you overcome the challenges and regain a sense of peace and balance. Take the first step towards a stress-free life today.
                </Card.Text>
                <Button variant="primary">Explore more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Card 1 */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: "35rem" }}>
              <Card.Body>
                <Card.Title>Anxiety</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                Feeling low and on the edge is a sign that you need help. There is an unmet need of either feeling loved, worthy or just self-assured that can be met with professional assistance.
                </Card.Text>
                <Button variant="primary">Explore more</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: "35rem" }}>
              <Card.Body>
                <Card.Title>Depression</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                Overcome the grip of depression with our compassionate and effective therapy services. Our expert therapists work through evidence-based approaches to help you regain your joy, find inner strength, and live a fulfilling life.
                </Card.Text>
                <Button variant="primary">Explore more</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: "35rem" }}>
              <Card.Body>
                <Card.Title>Lifestyle Issues</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                What we do everyday creates a huge impact on our quality of life. Whether it is addiction, binge-watching, or binge-eating, get the help to make healthy choices in life.
                </Card.Text>
                <Button variant="primary">Explore more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Schemes;
