import React from 'react';
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "./BuyToyPopup.css"

class BuyToyPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      money: null,
    };
  }
  componentDidMount() {
    window.openModal = (enoughMoney) => {
      this.setState({ money: enoughMoney })
      this.setState({ open: true });
      console.log(enoughMoney)
      console.log(this.state.money)
    }

    window.closeModal = () => {
      this.setState({ open: false });
    }
  }

  render() {
    return (
      <div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal rounded">
            <a className="close" onClick={window.closeModal}>
              &times;
              </a>
            {this.state.money ?

              <div className="buytoy">
                <div class="alert alert-success shadow" role="alert">Congratulations!!!</div>
                <img alt="" src="uncle.svg" class="rounded float-left" width="90" />
                <img alt="" src="rockethappy.svg" class="rounded float-right" width="90" />
              You just bought a new toy!
              </div> :

              <div className="buytoy">
                <div class="alert alert-danger shadow" role="alert">Sorry!!!</div>
                <img alt="" src="promotion.svg" class="rounded float-left" width="90" />
                <img alt="" src="barrier.svg" class="rounded float-right" width="100" />
              You don't have enough coins for this toy.
              Try to do add some toys for <Link to="/exchange" className="nav-Link">exchange</Link> first
              </div>}
            {console.log(this.money)}
          </div>
        </Popup>
      </div>
    );
  }
};
export default BuyToyPopup;


