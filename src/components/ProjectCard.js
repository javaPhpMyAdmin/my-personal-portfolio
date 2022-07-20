import { useState } from 'react';
import { Button, Col, Modal } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  siteURL,
  gitURL,
  technologies,
}) => {
  const [show, setShow] = useState(false);
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => setShow(!show)}>
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
            <Modal
              onHide={() => setShow(false)}
              show={show}
              size="lg"
              centered
              animation={true}
              id="modal-container"
            >
              <Modal.Header id="modal-header">
                <Modal.Title id="modal-title">{title}</Modal.Title>
                <Button onClick={() => setShow(!show)} variant="secondary">
                  X
                </Button>
              </Modal.Header>
              <Modal.Body id="modal-body">MY BODY INSIDE A MODAL</Modal.Body>
              <Modal.Body id="modal-body">
                <div className="tech-container">
                  {technologies.map((tech, index) => (
                    <div key={index} className="tech-item-container">
                      <div className="tech-item">{tech}</div>
                    </div>
                  ))}
                </div>
              </Modal.Body>
              <Modal.Footer id="modal-footer">
                <a href={gitURL}>
                  <Button variant="primary">GitHub</Button>
                </a>
                <a href={siteURL}>
                  <Button variant="primary">Visit Site</Button>
                </a>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </TrackVisibility>
    </Col>
  );
};
