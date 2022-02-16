import React, { useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './Maincontent.css';

const Maincontent = (props) => {

    const [indx, setindx] = useState('');

    const show_interest = (index) => {
        if(indx===index){
            setindx('');
        }
        else{
            setindx(index);
        }
    }

    const remove = (id) => {
        props.remove(id);
    }

    return (
        <Card className="users">
            <ul>
                {props.customers.map((user, index) => (
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
                            {
                                index === indx &&
                                <div>
                                    <b>Interest Earned:</b> {(user.interest * user.balance) / 100}
                                </div>
                            }
                        </div>
                        <div>
                            <Button className="Customer_update">Update</Button>
                            {
                                index === indx &&
                                <Button className="Customer_update" onClick={() => show_interest(index)}>Remove Interest</Button>
                            }
                            {
                                index !== indx &&
                                <Button className="Customer_update" onClick={() => show_interest(index)}>Calculate Interest</Button>
                            }
                            <Button className="Customer_update" onClick={() => remove(index)}>Remove</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default Maincontent;