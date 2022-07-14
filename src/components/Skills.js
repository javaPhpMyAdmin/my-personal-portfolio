import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";
import { CircularStatic } from "./CircularStatic";

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
const reactNativeSkill=70

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>SOME SHORT DESCRIPTION HERE</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <CircularStatic itemPercentage={reactSkill} />
                  <h5 style={{paddingTop:10}}>ReactJs </h5>
                </div>
                <div className="item">
                  <CircularStatic itemPercentage={nodeSkill} />
                  <h5 style={{paddingTop:10}}>NodeJs Express | NestJs</h5>
                </div>
                <div className="item">
                  <CircularStatic itemPercentage={pythonSkill} />
                  <h5 style={{paddingTop:10}}>Python (Flask)</h5>
                </div>
                <div className="item">
                  <CircularStatic itemPercentage={mySqlSkill} />
                  <h5 style={{paddingTop:10}}>MySQL</h5>
                </div>
                <div className="item">
                  <CircularStatic itemPercentage={sqlSkill} />
                  <h5 style={{paddingTop:10}}>SQL</h5>
                </div>
                <div className="item">
                  <CircularStatic itemPercentage={htmlCssJavascript} />
                  <h5 style={{paddingTop:10}}>HTML5 | CSS | JavaScript</h5>
                </div>
                <div className="item">
                  <CircularStatic itemPercentage={reactNativeSkill} />
                  <h5 style={{paddingTop:10}}>React Native</h5>
                </div>
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
