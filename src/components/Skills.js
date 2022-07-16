import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color-sharp.png";
import { CircularStatic } from "./CircularStatic";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { DataSkills } from "../utils";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const reactSkill = 80;
const nodeSkill = 75;
const pythonSkill = 70;
const mySqlSkill = 80;
const sqlSkill = 85;
const htmlCssJavascript = 70;
const reactNativeSkill = 70;

export const Skills = () => {
  const { ref, inView, entry } = useInView();
  return (
    <section className="skill" id="skills" ref={ref}>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>SOME SHORT DESCRIPTION HERE</p>
              <Carousel
                responsive={responsive}
                infinite={false}
                className="skill-slider"
              >
                {inView &&
                  DataSkills.map((itemSkill, index) => (
                    //TODO:TO CREATE A NEW COMPONENT ItemSkill TO SHOW INFORMATION
                    <div className="item" key={index}>
                      <CircularStatic {...itemSkill} />
                      <h5 style={{ paddingTop: 10 }}>{itemSkill.skill} </h5>
                    </div>
                  ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        className="background-image-left"
        alt="colorSharp"
      />
    </section>
  );
};
