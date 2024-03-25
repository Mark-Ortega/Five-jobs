import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import gitStartLogo from "../../assets/gitStartdownload (3).jpg";

const GitStartComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>GitStart</h1>
            <img src={gitStartLogo} style={{ float: "right", width: "10rem" }} />
            <p>
              I found out about GitStart at devweek and the idea sounded pretty awesome. I was talking to one of the guys at the booth and he was talking about how great the work enviroment was and how they allowed employees to travel around the world and work at their many offices. They also stressed about how much teamwork they have on a daily basis. The stack they use is based on what the customer wants. You see, gitstart is basically a ticket system where one person submits a ticket for something and another person completes it. So really they need all types of languages. They also offered interns after we graduate and talked about how they loved to hire new software engineers. I think with my current skill set it would take a little more time and practice but i could probably be ready for the job position soon.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/gitstarthq"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitStart LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GitStartComponent;
