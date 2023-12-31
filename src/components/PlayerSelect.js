import {Input, Spinner} from "reactstrap";

const PlayerSelect = ({onChange, value, playerData, filterOut}) => {
        return(
            <Input type="select" onChange={onChange} value={value}>
                {!playerData ? (
                    <Spinner
                        style={{ margin: "auto", width: "0.7rem", height: "0.7rem" }}
                        type="grow"
                    />
                ) : (
                    <>
                    {!value && <option value="" disabled>Select Player</option>}
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

