import { useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>SOME LOREMP ITSUM</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Mobile Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Back | APIS</Nav.Link>
                </Nav.Item>
              </Nav>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__pulse" : ""
                    }
                  >
                    <Tab.Content
                    /* id="slideInUp" */
                    // className={isVisible ? "animate__animated animate__bounce" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        alt="colorSharp2"
        className="background-image-right"
        src={colorSharp2}
      />
    </section>
  );
};
