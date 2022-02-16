import React from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './Maincontent.css';

const Maincontent = (props) => {
    console.log(props);

    return (
        <Card className="users">
            <ul>
                {props.customers.map(user => (
                    <li key={user.accountNo}>
                        <div>
                            <div>
                                <b>Name:</b> {user.name}
                            </div>
                            <div>
                                <b>Account No:</b> {Math.round(user.accountNo * 10000000000)}
                            </div>
                            <div>
                                <b>Balance:</b> {user.balance}
                            </div>
                        </div>
                        <div>
                            <Button className="Customer_update">Update</Button>
                            <Button className="Customer_update">Check Interest</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default Maincontent;