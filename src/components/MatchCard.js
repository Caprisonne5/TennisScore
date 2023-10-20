import {Card, CardText, CardTitle, Col, Input, Label, Progress, Row} from "reactstrap";
import PlayerRepository from "../objects/PlayerRepository";
import player from "../objects/Player";
import PlayerStrengths from "./PlayerStrengths";
const MatchCard = ({Players}) => {

    const Player1 = PlayerRepository.find((player) => player.name === Players[0]);
    const Player2 = PlayerRepository.find((player) => player.name === Players[1]);

    return(
        <Card>
            <Row>
                <Col>
                    <Card>
                        <CardTitle>{Player1.name}</CardTitle>
                            <PlayerStrengths Player={Player1}/>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardTitle>{Player2.name}</CardTitle>
                    </Card>
                </Col>
            </Row>
        </Card>
    );
};

export default  MatchCard;
