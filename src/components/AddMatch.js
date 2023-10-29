import {useSelector} from "react-redux";
import {CardTitle, Row} from "reactstrap";
import Button from "react-bootstrap/Button";
import "../styles/AddMatch.css"

const AddMatch = ({cancelAddMatch}) => {
    const Player1 = useSelector(state => state.player.player1);
    const Player2 = useSelector(state => state.player.player2);

    return (
        <div className={"addMatchContainer"}>
                <CardTitle className={"winnerTitle"}>Choose Winner:</CardTitle>
                <Button style={{background: "#95b67f", borderColor: "#526843"}} className={"playerBtn"}>{Player1.name} <div style={{float: "right"}}>+</div></Button>
                <Button style={{background: "#95b67f", borderColor: "#526843"}} className={"playerBtn"} >{Player2.name} <div style={{float: "right"}}>+</div></Button>
                <Button variant={"danger"} className={"cancelBtn"} onClick={cancelAddMatch}>🗑</Button>
        </div>
    )
}
export default AddMatch;
