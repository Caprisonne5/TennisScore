import {Card, CardTitle, Col, Container,Row} from "reactstrap";
import Button from 'react-bootstrap/Button';
import PlayerSelect from "../components/PlayerSelect";
import MatchCard from "../components/MatchCard";
import {getPlayers} from "../api";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addPlayer2ToState, addPlayer1ToState} from "../redux/playerSlice";
import "../styles/Home.css"

let Players = [];

Players.push("Nicolas");
Players.push("Mateo");

const Home = () => {

    const dispatch = useDispatch();

    const [selectedPlayer1, setSelectedPlayer1] = useState("");
    const [selectedPlayer2, setSelectedPlayer2] = useState("");
    const [playerData, setPlayerData] = useState(undefined);
    const [filterDataP1, setFilterDataP1] = useState(undefined);
    const [filterDataP2, setFilterDataP2] = useState(undefined);

    useEffect(  () => {
        getPlayers().then(data => {
            setPlayerData(data.players);
            setFilterDataP1(data.players);
            setFilterDataP2(data.players);
            for(let i = 0; i < data.players.length; i++){
                if (data.players[i].name === selectedPlayer1){
                    dispatch(addPlayer1ToState({player1: data.players[i]}));
                    setFilterDataP1(filterData(selectedPlayer1));
                }
                if (data.players[i].name === selectedPlayer2){
                    dispatch(addPlayer2ToState({player2: data.players[i]}));
                    setFilterDataP2(filterData(selectedPlayer2));
                }
            }
        })
    }, [selectedPlayer1, selectedPlayer2, dispatch]);

    useEffect(() => {
    }, [filterDataP1, filterDataP2]);
    function filterData (players){
        return playerData.filter(player => player.name !== players);
    }
    const onChangeP1  = (e) => {
        const selectedPlayer1 = e.target.value.toString();
        setSelectedPlayer1(selectedPlayer1);
    }

    const onChangeP2 = (e) => {
        const selectedPlayer2 = e.target.value.toString();
        setSelectedPlayer2(selectedPlayer2);
    }

    return <Container>
        <Card className={"container"}>
            <Row className={"playerselectionRow"}>
                <Col>
                    {!filterDataP2 ? ("Loading") :
                        (<PlayerSelect
                                       playerData={filterDataP2.map(y => y.name)}
                                       onChange={onChangeP1}
                                       value={selectedPlayer1}/>)
                    }
                </Col>
                <Col>
                    {!filterDataP1 ? ("Loading") :
                        (<PlayerSelect
                                       playerData={filterDataP1.map(y => y.name)}
                                       onChange={onChangeP2}
                                       value={selectedPlayer2}/>)
                    }
                </Col>
            </Row>
            <Row className={"matchCard"}>
                <MatchCard Players={Players} />
            </Row>
        </Card>
    </Container>
};

export default Home;
