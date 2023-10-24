import {Card, CardText, CardTitle, Col, Input, Label, Progress, Row, Spinner} from "reactstrap";
import PlayerRepository from "../objects/PlayerRepository";
import PlayerStrengths from "./PlayerStrengths";
import "../styles/MatchCard.css"
import {useSelector} from "react-redux";


const MatchCard = ({Players}) => {
    const Player3 = useSelector(state => state.player.player1);
    const Player4 = useSelector(state => state.player.player2);
    const Player1 = PlayerRepository.find((player) => player.name === Players[0]);
    const Player2 = PlayerRepository.find((player) => player.name === Players[1]);


    return(
        <Card>
            {!Player3 || !Player4 ?
                (<Spinner
                    style={{margin: "auto", width: "0.7rem", height: "0.7rem"}}
                    type="grow"
                />) :
                (
                <Row>
                    <Col xs={5}>
                        <Card className={"PlayerCards"}>
                            <CardTitle><h1>{Player3.name}</h1></CardTitle>
                            <PlayerStrengths Player={Player3}/>
                        </Card>
                    </Col>
                    <Col xs={2} className={"ScoreCard"}>
                        <Card>Hello</Card>
                    </Col>
                    <Col xs={5}>
                        <Card className={"PlayerCards"}>
                            <CardTitle><h1>{Player4.name}</h1></CardTitle>
                            <PlayerStrengths Player={Player4}/>
                        </Card>
                    </Col>
                </Row>
                )
            }
        </Card>
    );
};

export default  MatchCard;
