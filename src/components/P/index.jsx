import { useContext } from "react";
import { GlobalContexte } from "../../context/AppContext/index";

// eslint-disable-next-line
export const P = () => {
    const { state: {body, counter}, state, setState } = useContext(GlobalContexte);
    return <p onClick={() => setState({ ...state, counter: counter + 1 })}>{body}</p>
};
