import { Fragment, useState, useEffect } from "react";
import Addcustomer from "../Addcustomer/Addcustomer";
import Maincontent from "../Maincontent/Maincontent";
import Navbar from "../Navbar/Navbar";
import './Homepage.css';

const Homepage = () => {
    const [adddata, setadddata] = useState([]);
    const [updatedata, setupdatedata] = useState({ isediting: false, data: '', index: ''});

    const addUserHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData
        }

        setadddata((prevData) => {
            return [userData, ...prevData];
        });
    };

    const edit = (isediting, data, index) => {
        setupdatedata({
            isediting: isediting,
            data: data, 
            index: index
        });
        // console.log(isediting, data, index);
    }
    useEffect(() => {
      }, [updatedata]);

    const updateuserHandler = (props) => {

        const userData = [...adddata];
        userData.splice(updatedata.index, 1, props);
        setadddata(userData);
    }

    const remove_customer = (id) => {
        const userData = [...adddata];

        userData.splice(id, 1);
        setadddata(userData);
    }

    return (
        <Fragment>
            <Navbar />
            <Addcustomer addCustomer={addUserHandler} editing={updatedata} updated= {updateuserHandler}/>
            <Maincontent customers={adddata} remove={remove_customer} edit={edit} />
        </Fragment>
    )
}

export default Homepage;