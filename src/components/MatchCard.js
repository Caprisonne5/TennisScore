import {Card, CardText, CardTitle, Col, Input, Label, Progress, Row} from "reactstrap";
import PlayerRepository from "../objects/PlayerRepository";
import PlayerStrengths from "./PlayerStrengths";
import "../styles/MatchCard.css"


const MatchCard = ({Players}) => {

    const Player1 = PlayerRepository.find((player) => player.name === Players[0]);
    const Player2 = PlayerRepository.find((player) => player.name === Players[1]);


    return(
        <Card>
            <Row>
                <Col xs={5}>
                    <Card className={"PlayerCards"}>
                        <CardTitle><h1>{Player1.name}</h1></CardTitle>
                            <PlayerStrengths Player={Player1}/>
                    </Card>
                </Col>
                <Col xs={2} className={"ScoreCard"}>
                    <Card>Hello</Card>
                </Col>
                <Col xs={5}>
                    <Card className={"PlayerCards"}>
                        <CardTitle><h1>{Player2.name}</h1></CardTitle>
                        <PlayerStrengths Player={Player2}/>
                    </Card>
                </Col>
            </Row>
        </Card>
    );
};

export default  MatchCard;
