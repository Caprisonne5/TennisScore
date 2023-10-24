import {Card, CardTitle, Col, Container, Input, Row} from "reactstrap";
import horse from "../imgs/random horse facts shareable.webp";
import {Button} from "bootstrap/js/index.esm";
import PlayerRepository from "../objects/PlayerRepository";
import PlayerSelect from "../components/PlayerSelect";
import MatchCard from "../components/MatchCard";
import {getMatches, getPlayers, test, testPost, testPutMatches} from "../api";
import {useEffect, useState} from "react";

let Players = [];

Players.push("Nicolas");
Players.push("Mateo");




const Home = () => {

    const [selectedPlayer1, setSelectedPlayer1] = useState(undefined);
    const [selectedPlayer2, setSelectedPlayer2] = useState(undefined);

    useEffect(() => {
        console.log(selectedPlayer1);
        console.log(selectedPlayer2);
    }, [selectedPlayer1, selectedPlayer2])

    const onChangeP1  = (e) => {
        const selectedPlayer1 = e.target.value.toString();
        setSelectedPlayer1(selectedPlayer1);
    }

    const onChangeP2 = (e) => {
        const selectedPlayer2 = e.target.value.toString();
        setSelectedPlayer2(selectedPlayer2);
    }

    return <Container>
        <Card>
            <CardTitle>Here Are Players</CardTitle>
            <Row>
                <Col>
                    <PlayerSelect onChange={onChangeP1} value={undefined}/>
                </Col>
                <Col>
                    <PlayerSelect onChange={onChangeP2} value={undefined}/>
                </Col>
            </Row>
            <Row>
                <MatchCard Players={Players}/>
            </Row>

        </Card>
    </Container>
};

export default Home;
