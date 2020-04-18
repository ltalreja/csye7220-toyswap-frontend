import React from 'react';
import './Popup.css';
import ToysApi from '../../api/ToysApi';
import Convert from "./Curency";
import UserApi from '../../api/UserApi';

class SearchItem extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            item: props.item,
            id: props.id,
            close: props.close,
            user: null,
            enoughMoney: null,
            show: false,

        };
    }
    async componentDidMount() {
        window.userApi = UserApi
        const response = await UserApi.getCurrentUser();

        this.setState({
            user: response.data,
        })

    }

    async handleSubmit() {
        try {
            await ToysApi.buyToy(this.state.item.id)
            window.updateBalance();
            this.setState({ enoughMoney: true, });
            this.props.close();
            console.log(this.state.enoughMoney);
            window.openModal(this.state.enoughMoney);



        } catch (e) {
            this.setState({ enoughMoney: false, });
            this.props.close();
            window.openModal(this.state.enoughMoney);


        }
    }

    render() {
        const { item, close, enoughMoney } = this.state;
        return (
            <div className="modal">
                <a className="close" onClick={close}>
                    &times;
                    </a>

                <div className="header shadow-sm p-3 mb-5 bg-warning rounded"> {item.toy_Name} </div>
                <div className="content shadow-sm p-3 mb-5 bg-white rounded">
                    <img width="100px" height="100px " src={item.toy_Photo}
                        alt={item.toy_Name} ></img> {item.toy_Name}
                    <a className="price float-right p-3 mb-5 bg-warning rounded">
                        Price: {item.toy_Price} Coins
                    </a>
                </div>
                <br></br>
                <div className="msg shadow-sm p-3 mb-5 bg-white rounded">
                    <Convert price={item.toy_Price} />
                </div>

                <div>
                    <button className="btn btn-outline-success btn-lg btn-block" onClick={() => this.handleSubmit()}>I want this toy!</button>

                    {console.log(enoughMoney)}
                </div>
            </div>
        )
    }
}

export default SearchItem;