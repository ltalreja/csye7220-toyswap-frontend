import React from "react";
import { Link } from "react-router-dom";
import UserApi from "../../api/UserApi";

class Navbar extends React.Component {
    state = {
        user: "",
    }
    async componentDidMount() {
        const response = await UserApi.getCurrentUser()

        this.setState({
            user: response.data
        })
        window.updateBalance = async () => {
            const response = await UserApi.getCurrentUser()

            this.setState({
                user: response.data
            })
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-warning text-dark">
                <img src="abc.svg" width="90px" alt="logo" />
                <span class="navbar-text">

                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                                </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/exchange" className="nav-link">
                                Exchange toys
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/purchased" className="nav-link">
                                Manage Toys
                                </Link>
                        </li>
                    </ul>


                    <div className="nav-item">
                        <a class="nav-link">
                            <img alt="" src="robotLog.svg" class="rounded float-left" width="30" /> &nbsp;
                         {this.state.user.name}</a>


                    </div>
                    <div className="nav-item">
                        <a class="nav-link">
                            <img alt="" src="piggy-bank.svg" class="rounded float-left" width="30" /> &nbsp;
                       {this.state.user ? this.state.user.balance + " Coins" : "Loading..."} </a>
                    </div>


                    <button className="btn btn-light my-2 my-sm-0 margin-left: 10px" onClick={() => this.props.onLogout()}>Logout</button>
                </div>
            </nav>
        );
    }

}
export default Navbar;