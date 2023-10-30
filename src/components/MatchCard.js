import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
    Col,
    Input,
    Label,
    Progress,
    Row,
    Spinner
} from "reactstrap";
import PlayerStrengths from "./PlayerStrengths";
import "../styles/MatchCard.css"
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMatches} from "../api";
import Button from "react-bootstrap/Button";
import tenniscourt from "../imgs/pngegg.png"
import AddMatch from "./AddMatch";

const MatchCard = () => {
    const Player1 = useSelector(state => state.player.player1);
    const Player2 = useSelector(state => state.player.player2);
    const [WinsPlayer1, setWinsPlayer1] = useState(0);
    const [WinsPlayer2, setWinsPlayer2] = useState(0);
    const [addMatch, setAddMatch] = useState(false);

    function relevantGame (match) {
        let relevant = false;
        const player1id = match.player1;
        const player2id = match.player2;
        if((player1id === Player1.id && player2id === Player2.id)||
            (player1id === Player2.id && player2id === Player1.id)){
            relevant = true;
        }
        return relevant;
    }


    useEffect(() => {
        setWinsPlayer1(0);
        setWinsPlayer2(0);
        if (Player1 && Player2) {
            getMatches().then(data => {
                let winsP1 = 0;
                let winsP2 = 0;
                for (let i = 0; i < data.matches.length; i++) {
                    if (relevantGame(data.matches[i])) {
                        if (data.matches[i].winner === Player1.id) {
                            winsP1 += 1;
                        }
                        if (data.matches[i].winner === Player2.id) {
                            setWinsPlayer2(WinsPlayer2 + 1);
                            winsP2 += 1;
                        }
                    }
                }
                setWinsPlayer1(winsP1);
                setWinsPlayer2(winsP2);
            })
        }
    }, [Player1, Player2]);

    function cancelAddMatch () {
        setAddMatch(false);
    }



    return(
        <Card className={"containerMatch"}>
            <div className={"containerMatch"}>
            <CardImg src={tenniscourt} alt={"Tennis Court"} className={"courtImg"}/>
            </div>
            <CardImgOverlay>
                    {!Player1 || !Player2 ?
                        (<div className={"containerMatch"}>
                            <Spinner
                            style={{margin: "auto", width: "0.7rem", height: "0.7rem"}}
                            type="grow"
                        /></div>
                        ) : addMatch ?
                            (<AddMatch cancelAddMatch={cancelAddMatch}/>)
                            : (
                                <Row className={"Row"}>
                                    <Col xs={5} className={"PlayerCardsCol"}>
                                        <Card className={"PlayerCards"}>
                                            <CardTitle><h1>{Player1.name}</h1></CardTitle>
                                            <PlayerStrengths Player={Player1}/>
                                        </Card>
                                    </Col>
                                    <Col className={"ScoreCard"}>
                                            {WinsPlayer1} : {WinsPlayer2}
                                    </Col>
                                    <Col xs={5} className={"PlayerCardsCol"}>
                                        <Card className={"PlayerCards"}>
                                            <CardTitle><h1>{Player2.name}</h1></CardTitle>
                                            <PlayerStrengths Player={Player2}/>
                                        </Card>
                                    </Col>
                                    <Button style={{background: "#95b67f", borderColor: "#59833d"}} className={"AddMatchButton"} onClick={() => setAddMatch(true)}>Add Match 🎾</Button>
                                </Row>
                            )
                    }
            </CardImgOverlay>
        </Card>
    );
};

export default  MatchCard;
