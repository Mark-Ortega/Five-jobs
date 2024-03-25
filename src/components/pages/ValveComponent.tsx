import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import nintendoLogo from "../../assets/Valve_logo.svg.png";

const ValveComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Valve</h1>
            <img
              src={nintendoLogo}
              style={{ float: "right", width: "10rem" }}
            />
            <p>
                Valve is one of my favorite game studios. As a kid i was obsessed with left 4 dead. I think it would be amazing to work there because they are such an awesome company. Valve is always finding new ways to dominate the game market with games such as Left 4 dead, Half life, gary's mod etc.
                Valve is also well know so there'll be tons of cool people to meet. They're work enviroment seems nice too. You can even work on any project you desire! Valve also requires C++ So id first have to learn meaning im definitely not ready for a job there but i would still like to work there maybe on a potential left 4 dead 3 release :o. Valves HQ is in Bellevue, Washington. A bit far but if i got a job there i'd be willing to move.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                <a
                  href="https://www.glassdoor.com/Overview/Working-at-Valve-Corporation-EI_IE24849.11,28.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>couldnt find a actual job link so theres this instead</p>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ValveComponent;
