import { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  siteURL,
  gitURL,
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
      <Modal
        onHide={() => setShow(false)}
        show={show}
        size="lg"
        centered
        animation
        id="modal-container"
      >
        <Modal.Header id="modal-header">
          <Modal.Title id="modal-title">{title}</Modal.Title>

          <Button onClick={() => setShow(!show)} variant="secondary">
            X
          </Button>
        </Modal.Header>
        <Modal.Body id="modal-body">MY BODY INSIDE A MODAL</Modal.Body>
        <Modal.Footer id="modal-footer">
          <a href={gitURL}>
          <Button variant="primary">GitHub</Button>
          </a>
          <a href={siteURL}>
            <Button variant="primary">Visit Site</Button>
          </a>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
