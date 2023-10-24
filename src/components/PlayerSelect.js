import {Input, Spinner} from "reactstrap";
import PlayerRepository from "../objects/PlayerRepository";
import player from "../objects/Player";

const PlayerSelect = ({onChange, value, playerData}) => {

        return(

            <Input type="select" onChange={onChange} value={value}>
                {!playerData ? (
                    <Spinner
                        style={{ margin: "auto", width: "0.7rem", height: "0.7rem" }}
                        type="grow"
                    />
                ) : (
                    <>
                        <option value="" disabled>Select Player</option>
                        {Array.from(playerData).map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </>
                )}
            </Input>)
};

export default PlayerSelect;

