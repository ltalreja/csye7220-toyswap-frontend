import React from 'react';
import Axios from 'axios';
class Convert extends React.Component {
    state = {
        loading: true,
        rates: {},
    };
async componentDidMount(){
const url = "https://api.exchangeratesapi.io/latest";
const response = await Axios.get(url);
this.setState({ rates: response.data.rates,loading: false });
console.log(response)
}
render() {
    return <div>
        {this.state.loading || !this.state.rates ? <div>loading..</div> : <div>working</div>}
    </div>
}
}
export default Convert;