import { Fragment, useState } from "react";
import Addcustomer from "../Addcustomer/Addcustomer";
import Maincontent from "../Maincontent/Maincontent";
import Navbar from "../Navbar/Navbar";
import './Homepage.css';

const Homepage = () => {
    const [adddata, setadddata] = useState([]);

    const addUserHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData
        }

        setadddata((prevData) => {
            return [userData, ...prevData];
        });
    };

    const remove_customer = (id) => {
        const userData = [...adddata];

        userData.splice(id, 1);
        setadddata(userData);
    }

    return (
        <Fragment>
            <Navbar />
            <Addcustomer addCustomer={addUserHandler} />
            <Maincontent customers={adddata} remove={remove_customer} />
        </Fragment>
    )
}

export default Homepage;