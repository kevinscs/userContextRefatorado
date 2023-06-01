import { useContext } from "react";
import { GlobalContexte } from "../../context/AppContext/index";

// eslint-disable-next-line
export const H1 = () => {
    const { state: {title, counter} } = useContext(GlobalContexte);
    return <h1>{title} {counter}</h1>
};
