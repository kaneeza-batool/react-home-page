import { Card, Col, Container, Row } from "react-bootstrap";

function Features() {
  return (
    <section id="features" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">
          Everything you need to stay on track
        </h2>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Smart schedule</Card.Title>
                <Card.Text>
                  Add your classes once and see your free time laid out for the
                  whole week.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Deadline tracker</Card.Title>
                <Card.Text>
                  Keep assignments and exams in a single list, sorted by what is
                  due soonest.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Focus sessions</Card.Title>
                <Card.Text>
                  Start a timed study block for one subject and put everything
                  else aside until it ends.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
