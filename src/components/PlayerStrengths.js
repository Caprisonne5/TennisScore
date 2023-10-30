import {Card, Col, Label, Progress, Row, Spinner} from "reactstrap";
import "../styles/MatchCard.css"
const PlayerStrengths = ({Player})=> {

    let strengths = Object.keys(Player.strengths);

    return (

        <Card>
            { strengths === undefined ?
                (<Spinner
                    style={{margin: "auto", width: "0.7rem", height: "0.7rem"}}
                    type="grow"
                />) :
                (<Card>
                    {strengths.map((strength, index) => (
                        <Row key={index}>
                            <Col xs={4}>
                                <Label for={strength.toString()}>
                                    {`${strength.toString().toUpperCase()}:`}
                                </Label>
                            </Col>
                            <Col xs={8}>
                                <Progress style={{marginTop: 6}} barClassName={"strengthProgress"} color={"green"} id={strength.toString()} value={Player.strengths[strength]}>
                                    {Player.strengths[strength]}
                                </Progress>
                            </Col>
                        </Row>
                        ))}
                </Card>)
            }
        </Card>
    );
}
export default PlayerStrengths;




