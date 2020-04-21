import React from "react";
import "./ExchangePage.css"
import ToyForm from "./ToyForm"
import ToysApi from "../../api/ToysApi"

class ExchangePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showToyForm: false,
    };
  }


  async onClickToyCreate(toyData) {
    console.log("toy onClick is Done", toyData);
    const formData = new FormData();
    formData.append('file', toyData.toyImage);
    formData.append('toy_Name', toyData.toyName);
    formData.append('toy_Price', toyData.toyValue);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    try {
      const response = await ToysApi.createPost(formData, config);
      if (response.status === 200){
        console.log(response);
        alert("Toy added successfully");
        this.setState({ showToyForm: false })
      } else{
        console.log(response);
        alert("There was a problem adding a toy")
      }
    } catch (error) {
        console.log("");
    }


  }
  render() {
    return (
      <div>

        <img src="spinning-top.svg" class="rounded float-left" width="70" height="70" alt="logo" />
        <img src="cart.svg" class="rounded float-right" width="70" height="70" alt="logo" />

        <div>
          <center>
            <p className="big-p">
              Had enough fun with your toy? </p>

          </center>

          <div className="alert alert-success shadow-lg" role="alert">
            <img src="birthday.svg" class="rounded float-right" width="120" alt="logo" />
            <center>
              <p className="alert-text">Exchange your used toy with another used toy, or donate your toy! </p>
            </center>
            <p class="mb-0">
              <button className="create btn btn-warning btn-lg btn-block float-left" type="button shadow-lg"
                // className="btn btn-warning btn-lg btn-block float-left"
                style={buttonStyle}
                onClick={() => this.setState({ showToyForm: true })}
              > <i class="fa fa-share-square"></i> Share your toy
                   </button>
            </p>
          </div>


          <div>
            &nbsp;<br></br><br></br>
            {this.state.showToyForm ?
              <ToyForm onClickToyCreate={(toyData) => this.onClickToyCreate(toyData)} /> : ""
            }
          </div>
        </div>
      </div>

    );
  }
}

const buttonStyle = {
  marginRight: '1px',
  marginBottom: '20px',
}
export default ExchangePage;