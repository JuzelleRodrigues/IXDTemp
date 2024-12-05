import React from 'react';
import { Container, Row, Col, Form, Button, Accordion } from 'react-bootstrap';
import './Contact.css';

const Contact: React.FC = () => (
  <Container fluid className="contact-section">
    <Row className="justify-content-center align-items-center gap-5">
      <Col md={5} className="contact-info">
        <h1 className="title">Let’s Talk</h1>
        <p className="description">
          Have some big idea or brand to develop and need help?
          <br />
          Reach out, I’d love to hear about your project and provide help!
        </p>

        <div className="info-group">
          <h2>Email</h2>
          <p>xxxx-xxxx-xxxx10@gmail.com</p>
        </div>

        <div className="info-group">
          <h2>Socials</h2>
          <p className="social-link">Instagram</p>
          <p className="https://linkedin.com">LinkedIn</p>
          <p className="social-link">Behance</p>
        </div>
      </Col>

      <Col md={5}>
        <Form className="contact-form">
          <Form.Group className="mb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>What service are you interested in</Form.Label>
            <Form.Select>
              <option>Select project type</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Budget</Form.Label>
            <Form.Select>
              <option>Select project budget</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
          </Form.Group>

          <Button variant="dark" type="submit" className="submit-button">
            SUBMIT
          </Button>
        </Form>
      </Col>
    </Row>

    {/* FAQ Accordion */}
    <Row className="justify-content-center mt-5">
      <Col md={10}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What services do you offer?</Accordion.Header>
            <Accordion.Body>
            I provide end-to-end design and content solutions, including creating user-friendly interfaces, crafting engaging website or app designs, and writing SEO-friendly content for blogs, websites, and social media.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do you ensure your designs and content meet client goals?</Accordion.Header>
            <Accordion.Body>
            I follow a collaborative process. For design, I create wireframes, prototypes, and test usability. For content, I research the audience, optimize for SEO, and align with your brand tone. Regular feedback ensures your goals are achieved.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can you work on redesigning an existing website or app?</Accordion.Header>
            <Accordion.Body>
            Absolutely! I can revamp your design to improve usability and aesthetics while ensuring the content is clear, compelling, and tailored to your audience.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Do you handle content strategy as well as design?</Accordion.Header>
            <Accordion.Body>
            Yes, I offer integrated solutions. This includes creating cohesive visual designs and content strategies to ensure a seamless user experience and effective messaging.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What tools and platforms do you use?</Accordion.Header>
            <Accordion.Body>
            For design, I use tools like Figma for prototyping, the Adobe Suite for visuals and graphics and development using React. For content, I work with CMS platforms like WordPress and tools like Grammarly and SEO optimization software.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Can you create or edit content for specific industries?</Accordion.Header>
            <Accordion.Body>
            Absolutely! Whether it’s a tech startup, fashion brand, or any niche industry, I conduct thorough research to deliver accurate, relevant, and engaging content that complements the design.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Do you offer post-project support?</Accordion.Header>
            <Accordion.Body>
            Yes, I provide support for both design and content. This includes updates, design refinements, and content adjustments based on user feedback or changing goals.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>What’s your typical project timeline?</Accordion.Header>
            <Accordion.Body>
            Timelines and costs vary depending on the scope of the project. I prioritize timely delivery without compromising on quality. To receive an accurate quote and timeline, please fill out the contact form with your project details, and I'll get back to you with a tailored estimate.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  </Container>
);

export default Contact;
