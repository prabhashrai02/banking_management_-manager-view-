import { Fragment } from "react";
import Addcustomer from "../Addcustomer/Addcustomer";
import Maincontent from "../Maincontent/Maincontent";
import Navbar from "../Navbar/Navbar";
import './Homepage.css';

const Homepage = () => {
    return (
        <Fragment>
            <Navbar />
            <Addcustomer />
            <Maincontent />
        </Fragment>
    )
}

export default Homepage;