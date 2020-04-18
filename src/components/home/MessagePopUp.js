import React from 'react';
import './Search.css'

class MessagePopUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            id: props.id,
            close: props.close,
            toyPrice: props.toyPrice,
            Currency: null,
        }

        this.Message1 = { Currency: "INR", Min: 180, Max: 220, Message: "Do you know that in India You can feed 4 persons for 3 whole days?" };
        this.Message2 = { Currency: "RUB", Min: 180, Max: 220, Message: "Do you know that in Russia You can 3 McDolands menus?" };
        this.Message3 = { Currency: "ILS", Min: 250, Max: 300, Message: "You know that in Palestina You can buy 1 kg traditional sweets?" };
        this.Message4 = { Currency: "SEK", Min: 1500, Max: 1800, Message: "You know that in Stockholm You can buy one day Stockholm Archipelago trip with your parents?" };
        this.Message5 = { Currency: "RON", Min: 400, Max: 450, Message: "You know that in Romania You can buy 10 days food for 2 people?" };
        this.Message6 = { Currency: "PLN", Min: 2100, Max: 2300, Message: "You know that in Poland You can have 1 month food for 2 people or weekend with parents in the polish mountain!" };

        this.Messages = [this.Message1, this.Message2, this.Message3, this.Message4, this.Message5, this.Message6];
    }

    getMessage() {
        var i;
        for (i = 0; i < this.Messages.length; i++) {
            if (this.Messages.Currency == this.props.code)
                return this.Message;

        }
    }

    render() {
        console.log(this.state.Currency)
        return (
            <div>
                {this.getMessage}
            </div>
        )
    }
}


export default MessagePopUp;