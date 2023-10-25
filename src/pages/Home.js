import {Card, CardTitle, Col, Container, Input, Row} from "reactstrap";
import {Button} from "bootstrap/js/index.esm";
import PlayerRepository from "../objects/PlayerRepository";
import PlayerSelect from "../components/PlayerSelect";
import MatchCard from "../components/MatchCard";
import {getMatches, getPlayers, test, testPost, testPutMatches} from "../api";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addPlayer2ToState, addPlayer1ToState} from "../redux/playerSlice";

let Players = [];

Players.push("Nicolas");
Players.push("Mateo");




const Home = () => {

    const dispatch = useDispatch();

    const [selectedPlayer1, setSelectedPlayer1] = useState("");
    const [selectedPlayer2, setSelectedPlayer2] = useState("");
    const [playerData, setPlayerData] = useState(undefined);

    useEffect(  () => {
        getPlayers().then(data => {
            setPlayerData(data.players);
            for(let i = 0; i < data.players.length; i++){
                if (data.players[i].name === selectedPlayer1){
                    dispatch(addPlayer1ToState({player1: data.players[i]}));
                }
                if (data.players[i].name === selectedPlayer2){
                    dispatch(addPlayer2ToState({player2: data.players[i]}));
                }
            }
        })
    }, [selectedPlayer1, selectedPlayer2, dispatch]);

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
                    {!playerData ? ("Loading") : (<PlayerSelect playerData={playerData.map(y => (y.name))} onChange={onChangeP1} value={undefined}/>)}
                </Col>
                <Col>
                    {!playerData ? ("Loading") : (<PlayerSelect playerData={playerData.map(y => (y.name))} onChange={onChangeP2} value={undefined}/>)}
                </Col>
            </Row>
            <Row>
                <MatchCard Players={Players}/>
            </Row>

        </Card>
    </Container>
};

export default Home;
