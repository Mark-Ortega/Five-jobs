import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import riotLogo from "../../assets/riotLogodownload.png";

const RiotComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Riot Games</h1>
            <img src={riotLogo} style={{ float: "right", width: "10rem" }} />
            <p>
              Riot Games would be a dream to work at. Im not much of a league player but man do i love valorant. I've seen plenty of videos on what it's like to work at Riot Games and all of them seem to show that it's a great work enviroment. Riot has plenty of offices around the world which is cool becuase they all look so unique. To work at riot games you need experience in C++ which i have none in. So currently i do not think i have the skill set and it would be cool to learn if i were able to land a job there. Plus free riot buddy.
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col>
            
            <ul>
              <li>
                <a
                  href="https://www.riotgames.com/en/work-with-us/job/5652130/staff-software-engineer-rendering-league-of-legends-los-angeles-usa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Riot Games LA
                </a>
              </li>
            </ul>

            {/* https://cdn.cloudflare.steamstatic.com/apps/valve/Valve_NewEmployeeHandbook.pdf */}
            {/* What's It Really like Working at Valve? We Found Out. https://www.youtube.com/watch?v=s9aCwCKgkLo&t=900s */}
            {/* What it's Like to Work at Valve https://www.youtube.com/watch?v=41XgkLKYuic */}
            {/* target="_blank" rel="noreferrer" */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RiotComponent;
