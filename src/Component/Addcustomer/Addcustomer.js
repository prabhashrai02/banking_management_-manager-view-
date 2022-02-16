import React, { useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './Addcustomer.css';

const Addcustomer = (props) => {
    const [enteredUsername, setenteredUsername] = useState('');
    const [enteredbalance, setenteredbalance] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || +enteredbalance < 1) {
            return;
        }

        const data = {
            accountNo: Math.random().toString(),
            name: enteredUsername,
            balance: enteredbalance,
        }

        setenteredbalance('');
        setenteredUsername('');

        props.addCustomer(data);
        console.log(data);
    }

    const ChangeUsername = (event) => {
        setenteredUsername(event.target.value);
    }

    const Changebalance = (event) => {
        setenteredbalance(event.target.value);
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
                    placeholder='Eg. 21'
                    onChange={Changebalance}
                    value={enteredbalance}
                ></input>

                <Button type='submit'
                >Add Customer</Button>
            </form>
        </Card>

    )
}

export default Addcustomer;