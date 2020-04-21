import React from "react";
import "./PurchasedPage.css";
import '../home/Search.css';
import PurchasedToysApi from "../../api/PurchasedApi";

class PurchasedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],

        };
    }

    async componentDidMount() {
        const rest = await PurchasedToysApi.getPurchasedToys()
        this.setState({ results: rest.data })
    }

    render() {
        return (
            <div id="main-group">

                <div>
                    <img src="spotlightLeft.svg" class="rounded float-left" width="80" height="80" alt="logo" />
                    <img src="spotlight.svg" class="rounded float-right" width="80" height="80" alt="logo" />

                </div>
                <div>
                    <center>
                        <p className="big-p">
                            Your toy world!
           </p>
                        <div>
                        </div>
                    </center>
                </div>


                <div className="search-container">
                    <ul className="ul rounded">
                        {
                            this.state.results.map(result =>
                                <li className="list shadow p-3 mb-5 bg-white rounded">
                                    <a>
                                        <img width="100px" height="100px " src={result.toyPhoto}
                                            alt={result.toyName} ></img> {result.toyName}
                                    </a>
                                    <a className="price shadow p-3 mb-5 bg-warning rounded float-right"> {result.toyPrice} Coins</a>

                                </li>
                            )
                        }
                    </ul>
                </div>

            </div>


        );
    }
}

export default PurchasedPage;