import {Card, Col, Label, Progress, Row, Spinner} from "reactstrap";

const PlayerStrengths = ({Player})=> {

    let strengths = Object.keys(Player.getStrengths());

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
                                <Progress style={{marginTop: 6}} id={strength.toString()} value={Player.getStrengths()[strength]}>
                                    {Player.getStrengths()[strength]}
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




