import {Card, CardTitle, Col, Container, Input, Row} from "reactstrap";
import horse from "../imgs/random horse facts shareable.webp";
import {Button} from "bootstrap/js/index.esm";
import PlayerRepository from "../objects/PlayerRepository";
import PlayerSelect from "../components/PlayerSelect";
import MatchCard from "../components/MatchCard";

let Players = [];

Players.push("Nicolas");
Players.push("Mateo");

const Home = () => {
    return <Container>
        <Card>
            <CardTitle>Here Are Players</CardTitle>
            <Row>
                <Col>
                    <PlayerSelect/>
                </Col>
                <Col>
                    <PlayerSelect/>
                </Col>
            </Row>
            <Row>
                <MatchCard Players={Players}/>
            </Row>
            <img src={horse} alt="Horse looking into Camera" style={{display: "none"}}/>

        </Card>
    </Container>
};

export default Home;
