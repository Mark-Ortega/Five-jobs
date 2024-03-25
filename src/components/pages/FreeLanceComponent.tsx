import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import freeLance from "../../assets/freeLancew8FLIeGE.jpg";

const FreeLanceComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Free Lance</h1>
            <img src={freeLance} style={{ float: "right", width: "10rem" }} />
            <p>
              I think free lancing would be awesome but stressful. You get to work on stuff you want to work on but it can also be very hard to make a living off of your work. Really you only need to know the languages you want to code in but you should always be learning constantly when free lancing. The freedom you will have will be like no other job but with that power comes great responsibility. You can also connect with other free lancers and work a small job for them for some quick cash. The possibilites are truly endless.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                <a
                  href="https://www.chetu.com/services.php?keyword=freelance%20programmers&gad_source=1&gclid=EAIaIQobChMIz_q-u-KPhQMVgSutBh0jfAonEAAYASAAEgJdoPD_BwE"
                  target="_blank"
                  rel="noreferrer"
                >
                  You can post yourself on a website like this
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FreeLanceComponent;
