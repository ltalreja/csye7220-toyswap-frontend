import React, { Component } from "react";
import Search from "./Search";
import UserApi from "../../api/UserApi";
import BuyToyPopup from "./BuyToyPopup";

class HomePage extends Component {
    state = {
        user: null,
    }

    async componentDidMount() {
        window.userApi = UserApi
        const response = await UserApi.getCurrentUser();

        this.setState({
            user: response.data,
        })

    }

    render() {
        return (
            <div>
                <img alt="" src="kids.svg" class="rounded float-right" width="90" height="90" />
                <img alt="" src="swing.svg" class="rounded float-left" width="90" height="90" />
                <div>
                    <center>
                        <p className="big-p">
                            Here you can find your new toy!
                    </p>
                        <div>
                            <Search />
                            <BuyToyPopup />
                        </div>
                    </center>
                </div>

            </div>
        );
    }
}

export default HomePage;