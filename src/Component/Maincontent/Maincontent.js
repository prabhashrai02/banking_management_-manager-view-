import React, {useState} from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './Maincontent.css';

const Maincontent = (props) => {
    console.log(props);

    const [interest_display, setinterest_display] = useState('hide');
    const [interest_button, setinterest_button] = useState('Calculate Interest');

    const show_interest=()=>{
        if(interest_display == "hide"){
            setinterest_display("show");
            setinterest_button("Remove Interest");
        }
        else{
            setinterest_display("hide");
            setinterest_button("Calculate Interest");
        }
    }

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
                            <div className={interest_display}>
                                <b>Interest Earned:</b> {(user.interest * user.balance)/100}
                            </div>
                        </div>
                        <div>
                            <Button className="Customer_update">Update</Button>
                            <Button className="Customer_update" onClick={show_interest}>{interest_button}</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default Maincontent;