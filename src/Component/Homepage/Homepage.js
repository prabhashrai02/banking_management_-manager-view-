import { Fragment } from "react";
import Maincontent from "../Maincontent/Maincontent";
import Navbar from "../Navbar/Navbar";
import './Homepage.css';

const Homepage = () => {
    return (
        <Fragment>
            <Navbar />
            <Maincontent />
        </Fragment>
    )
}

export default Homepage;