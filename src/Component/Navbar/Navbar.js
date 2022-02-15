import './Navbar.css';
import bank_logo from '../../Assets/bank_logo.svg';
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar_bank">
                <img src={bank_logo} alt="bank logo" width ="70px"/>
                <div className="Navbar_bank_name"><h2>Indian Bank</h2></div>
            </div>
            <div className="Navbar_options">
                <Button className="Navbar_add">
                Add Customer
                </Button>
                <div className="Navbar_manager"><h3>Hi Admin</h3></div>
            </div>
        </div>
    )
}

export default Navbar;