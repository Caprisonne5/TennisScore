import {Label, Progress} from "reactstrap";

const PlayerStrengths = ({Player})=> {


    return (
        <div>
            <Label for={"forehandPlayer1"} style={{textAlign:"left", float:"left"}}>Forehand:</Label>
            <Progress id={"forehandPlayer1"} value={Player.strengths.forehand}>{Player.strengths.forehand}</Progress>
        </div>
    );
}
export default PlayerStrengths;
