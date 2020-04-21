import React from 'react';
import Popup from "reactjs-popup";
import './Search.css'
import ToysApi from '../../api/ToysApi';
import SearchItem from "./SearchItem";

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results: [],
            loading: false
        };
    }

    fetchSearch = (query) => {
        if (query.length > 0 && query.trim() !== '') {
            console.log(query)
            ToysApi.getToyByName(query)
                .then(({ data }) => this.setState({ results: data }))
                .catch(err => console.error(err));
        }
    }

    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({ query, results: [] });
        } else
            this.setState({ query: query, loading: true })
        this.fetchSearch(query);
    };

    render() {
        const { query } = this.state;
        return (
            <div>
                <div className="App">

                </div>
                <div className="container">
                    <div className="rowrow mt-4">
                        <div className="col-md-6">
                            <label className="search label rounded shadow-lg" htmlFor="search-input">
                                <input
                                    type="text"
                                    name="query"
                                    value={query}
                                    id="search-input"
                                    placeholder="Search..."
                                    onChange={e => this.handleOnInputChange(e)}
                                />
                                <i className="fa fa-search search-icon" aria-hidden="true" />
                            </label>
                        </div>
                    </div>

                    <div className="search-container">
                        <ul className="ul rounded">
                            {
                                this.state.results.map(result =>
                                    <li className="list shadow p-3 mb-5 bg-white rounded" title="Click to view product">
                                        <Popup modal trigger={<div className="search-item rounded">
                                            <a>
                                                <img width="100px" height="100px " src={result.toy_Photo}
                                                    alt={result.toy_Name} ></img> {result.toy_Name}
                                            </a>
                                            <a className="price shadow p-3 mb-5 bg-warning rounded float-right">Exchange for: {result.toy_Price} Coins</a>
                                        </div>}>
                                            {close => <SearchItem close={close} item={result} />}
                                        </Popup>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
