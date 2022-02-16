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

    const data = [
        {
            accountNo: Math.random().toString(),
            name: `Prabhash Rai`,
            balance: 10000,
        },
        {
            accountNo: Math.random().toString(),
            name: `Prabhash Rai`,
            balance: 10000,
        },
        {
            accountNo: Math.random().toString(),
            name: `Prabhash Rai`,
            balance: 10000,
        },
    ] 

    return (
        <Fragment>
            <Navbar />
            <Addcustomer addCustomer={addUserHandler} />
            <Maincontent customers = {adddata}/>
        </Fragment>
    )
}

export default Homepage;