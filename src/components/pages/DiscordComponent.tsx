import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import discordLogo from "../../assets/discordownload.png";

const DiscordComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Discord</h1>
            <img src={discordLogo} style={{ float: "right", width: "10rem" }} />
            <p>
              The reason i'd like to work at discord is because I think its an amazing app. I use discord almost everyday to talk to friends while playing games or just to talk in general. I think it would be cool to work as a developer for an app ive used for a long time. This is no small company so theres plenty of people to meet there as well. Overall seems like it would be awesome to work on something so many people use.
              <br />
              <br />
              Discord is built primarily with Javascript as the front-end and uses Python in the back-end. I currently don't know any python but i think it would be cool to start learning since it is such a popular language. I do know some Javascript so i feel like if i were to get hired there i could learn a lot.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                <a
                  href="https://discord.com/careers"
                  target="_blank"
                  rel="noreferrer"
                >
                  Availabe Discord Jobs
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DiscordComponent;
