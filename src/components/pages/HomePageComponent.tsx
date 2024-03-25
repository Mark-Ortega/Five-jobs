import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import discordLogo from "../../assets/discordownload.png";
import valveLogo from "../../assets/Valve_logo.svg.png";
import riotLogo from "../../assets/riotLogodownload.png";
import gitStartLogo from "../../assets/gitStartdownload (3).jpg";
import FreeLanceLogo from "../../assets/freeLancew8FLIeGE.jpg";

const HomePageComponent = () => {
    const navigate = useNavigate();

    const handlePageChange = (path: string) => {
        navigate(path)
    }

  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            <Card className="h-100 mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={discordLogo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Discord</Card.Title>
                <Card.Text>
                  Social Media app mainly used by PC Gamers
                </Card.Text>
                <Button className="mt-auto" variant="primary" onClick={() => handlePageChange("/discord")}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="h-100 mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={valveLogo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Valve</Card.Title>
                <Card.Text>
                      A Well known game distributor who produces top tier games
                </Card.Text>
                <Button className="mt-auto" variant="primary" onClick={() => handlePageChange("/valve")}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="h-100 mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={riotLogo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Riot Games</Card.Title>
                <Card.Text>
                  Creators of Valorant and League of Legends
                </Card.Text>
                <Button className="mt-auto" variant="primary" onClick={() => handlePageChange("/riot")}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="h-100 mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gitStartLogo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>GitStart</Card.Title>
                <Card.Text>
                  A ticket support app i found out about at dev week
                </Card.Text>
                <Button className="mt-auto" variant="primary" onClick={() => handlePageChange("/gitstart")}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="h-100 mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={FreeLanceLogo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Free Lance</Card.Title>
                <Card.Text>
                  With great power comes great responsibility
                </Card.Text>
                <Button className="mt-auto" variant="primary" onClick={() => handlePageChange("/freelance")}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageComponent;
