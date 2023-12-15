import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color-sharp.png";
import { useInView } from "react-intersection-observer";
import { DataSkills } from "../utils";
import { ItemSkill } from "./ItemSkill";
import { responsive } from "../utils";

export const Skills = () => {
  const { ref, inView } = useInView();
  return (
    <section className="skill" id="skills" ref={ref}>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>SOME OF MY SKILLS</p>
              <Carousel
                responsive={responsive}
                infinite={false}
                className="skill-slider"
              >
                {inView &&
                  DataSkills.map((itemSkill, index) => (
                    <ItemSkill key={index} itemSkill={itemSkill} />
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
