import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './Addcustomer.css';

const Addcustomer = (props) => {

    const [isediting, setisediting] = useState(props.editing.isediting === true ? true : false);

    const [enteredUsername, setenteredUsername] = useState('');
    const [enteredbalance, setenteredbalance] = useState('');
    const [enteredinterest, setenteredinterest] = useState('');

    useEffect(() => {
        setisediting(props?.editing?.isediting ?? false);
        setenteredUsername(props?.editing?.data?.name ?? " ");
        setenteredbalance(props?.editing?.data?.balance ?? " ");
        setenteredinterest(props?.editing?.data?.interest ?? " ")
    }, [props.editing.isediting, props.editing.data])
    

    useEffect(() => {
    }, [enteredUsername, enteredbalance, enteredinterest]);

    const AddUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || +enteredbalance < 1 || +enteredinterest < 1 || +enteredinterest > 100) {
            return;
        }

        const data = {
            accountNo: isediting ? props.editing.data.accountNo : Math.random().toString(),
            name: isediting ? props.editing.data.name : enteredUsername,
            balance: enteredbalance,
            interest: enteredinterest
        }

        setenteredinterest('');
        setenteredbalance('');
        setenteredUsername('');

        console.log(isediting);

        isediting ? props.updated(data) : props.addCustomer(data);
        setisediting(false);


    }

    const ChangeUsername = (event) => {
        setenteredUsername(event.target.value);
    }

    const Changebalance = (event) => {
        setenteredbalance(event.target.value);
    }

    const Changeinterest = (event) => {
        setenteredinterest(event.target.value);
    }

    return (
        <Card className='input'>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">Enter customer's Name</label>

                <input type='text'
                    id='username'
                    placeholder='Eg. Prabhash Rai'
                    value={enteredUsername}
                    onChange={ChangeUsername}
                ></input>

                <label htmlFor="balance">Enter customer's balance</label>

                <input type='number'
                    id='balance'
                    placeholder='Eg. 10000'
                    onChange={Changebalance}
                    value={enteredbalance}
                ></input>

                <label htmlFor="balance">Interest Rate</label>
                <input type='number'
                    id='interest_rate'
                    placeholder='Eg. 5%'
                    onChange={Changeinterest}
                    value={enteredinterest}
                ></input>

                <Button type='submit' className="user_mode"
                > {isediting ? "Update Customer" : "Add Customer"}</Button>

            </form>
        </Card>

    )
}

export default Addcustomer;