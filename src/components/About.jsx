import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="fw-bold mb-3">Built for students</h2>
            <p className="text-secondary mb-0">
              Most planners expect you to already be organized. StudyNest starts
              with the classes you have and helps you build a routine you can
              keep, one week at a time.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
