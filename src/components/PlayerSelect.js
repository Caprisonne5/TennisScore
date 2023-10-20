import {Input} from "reactstrap";
import PlayerRepository from "../objects/PlayerRepository";

const PlayerSelect = () => {
    const playerSelection = PlayerRepository.map(y => (y.getName()))
        return(
        <Input type="select">
            {Array.from(playerSelection).map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
        </Input>)
};

export default PlayerSelect;

