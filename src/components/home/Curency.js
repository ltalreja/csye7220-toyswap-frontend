import React from "react";
import Axios from "axios";
import './Curency.css'

class Convert extends React.Component {
    state = {
        rates: null,
        randomCurrency: {},
        code: null,
    };
    async componentDidMount() {
        const url = "https://api.exchangeratesapi.io/latest?base=USD";
        const response = await Axios.get(url);
        this.setState({ rates: response.data.rates, loading: false });
        console.log(response)

        
        const INR = { country: 'India', code: 'INR', text: 'rupees' };
        const ILS = { country: 'Palestina', code: 'ILS', text: 'israel Shekels' }
        const PLN = { country: 'Poland', code: 'PLN', text: 'polish zloty' }
        const RON = { country: 'Romania', code: 'RON', text: 'romanian leu' }
        const RUB = { country: 'Russia', code: 'RUB', text: 'russian rubles' }


        let currencies = [INR, ILS, PLN, RON, RUB]
        console.log(currencies[Math.floor(Math.random() * currencies.length)]);

        this.setState({ randomCurrency: currencies[Math.floor(Math.random() * currencies.length)] });

    }

    getMessage(code) {
        const Message1 = { Currency: "RUB", Min: 180, Max: 220, Message: "and you can buy 3 McDolands menus with it?" };
        const Message2 = { Currency: "INR", Min: 180, Max: 220, Message: "and you can feed 4 people for 3 whole days with it?" };
        const Message3 = { Currency: "ILS", Min: 180, Max: 220, Message: "and you can buy 2 cinema tickets plus popcorn with it?" };
        const Message4 = { Currency: "RON", Min: 180, Max: 220, Message: "and you can pay for 2 nights in an hostel with it?" };
        const Message5 = { Currency: "PLN", Min: 180, Max: 220, Message: "and you can buy 35 liters of milk with it?" };

        const Message6 = { Currency: "RUB", Min: 250, Max: 300, Message: "and you can buy 6 cinema tickets with it?" };
        const Message7 = { Currency: "INR", Min: 250, Max: 300, Message: "and you can pay your home internet for 3 months with it?" };
        const Message8 = { Currency: "ILS", Min: 250, Max: 300, Message: "and you can buy lunch for 4 people with it?" };
        const Message9 = { Currency: "RON", Min: 250, Max: 300, Message: "and you can buy dinner for 3 people with it?" };
        const Message10 = { Currency: "PLN", Min: 250, Max: 300, Message: "and you can buy the public transportation pass for 1 month with it?" };

        const Message11 = { Currency: "RON", Min: 400, Max: 450, Message: "and you can buy 10 days of food for 2 people with it?" };
        const Message12 = { Currency: "RUB", Min: 400, Max: 450, Message: "and you can buy the public transportation pass for 2 months with it?" };
        const Message13 = { Currency: "INR", Min: 400, Max: 450, Message: "and you can buy the public transportation pass for 5 months with it?" };
        const Message14 = { Currency: "ILS", Min: 400, Max: 450, Message: "and you can buy 8 Happy Meal menus in McDonalds with it?" };
        const Message15 = { Currency: "PLN", Min: 400, Max: 450, Message: "and you can buy 7 cinema tickets with it?" };

        const Message16 = { Currency: "RON", Min: 1500, Max: 1900, Message: "and you can spend 2 nights in the best hotel in town and eat always in the best restaurant with it?" };
        const Message17 = { Currency: "RUB", Min: 1500, Max: 1900, Message: "and you can buy more than 200 bottles of coke/pepsi with it?" };
        const Message18 = { Currency: "INR", Min: 1500, Max: 1900, Message: "and you can buy grosseries for the whole month to your family with it?" };
        const Message19 = { Currency: "ILS", Min: 1500, Max: 1900, Message: "and you can buy the public transportation pass for 4 months with it?" };
        const Message20 = { Currency: "PLN", Min: 1500, Max: 1900, Message: "and you can buy more than 1000 eggs with it?" };

        const Message21 = { Currency: "RON", Min: 2100, Max: 2300, Message: "and that is equivalent to half of the minimum wage there?" };
        const Message22 = { Currency: "PLN", Min: 2100, Max: 2300, Message: "and you can have 1 month of food for 2 people or weekend with parents in the polish mountain with it?" };
        const Message23 = { Currency: "INR", Min: 2100, Max: 2300, Message: "and that's more than the mininum wage in some regions?" };
        const Message24 = { Currency: "ILS", Min: 2100, Max: 2300, Message: "and you can rent a room for one month with it?" };
        const Message25 = { Currency: "RUB", Min: 2100, Max: 2300, Message: "and you can buy 3 pairs of shoes from your favourite brand?" };

        let Messages = [Message1, Message2, Message3, Message4, Message5, Message6, Message7, Message8, Message9, Message10, Message11, Message12, Message13, Message14, Message15, Message16, Message17, Message18, Message19, Message20, Message21, Message22, Message23, Message24, Message25];
        let arrayLength = Messages.length;
        for (var i = 0; i < arrayLength; i++) {
            if (Messages[i].Currency === code && Messages[i].Min < this.props.price && Messages[i].Max > this.props.price) { return Messages[i].Message; }
        }
    }


    render() {
        const { randomCurrency } = this.state
        console.log(this.state)
        const convertedPrice = this.state.rates ? this.props.price * this.state.rates[randomCurrency.code] : "";
        return <div className="message-card">
            <h1 className="message-text">

                {this.state.rates ? <div>Did you know that in <b><font color="red">{randomCurrency.country}</font></b> this is worth <b><font color="green">{convertedPrice.toFixed(0)} {randomCurrency.text} </font></b> {this.getMessage(randomCurrency.code)} </div> : <div>working..</div>}
            </h1>

            <img alt="" src="speaker.svg" class="rounded float-right" width="100" />
        </div>

    }
}

export default Convert;
