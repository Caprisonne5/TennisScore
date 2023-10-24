import {Input} from "reactstrap";
import PlayerRepository from "../objects/PlayerRepository";

const PlayerSelect = ({onChange, value}) => {
    const playerSelection = PlayerRepository.map(y => (y.getName()))
        return(
        <Input type="select" onChange={onChange} value={value}>
            <option  value="" disabled>Select Player</option>
            {Array.from(playerSelection).map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
        </Input>)
};

export default PlayerSelect;

