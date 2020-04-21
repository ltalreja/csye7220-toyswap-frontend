import React from "react";

function ToyForm({ onClickToyCreate }) {
    const [toyName, setToyName] = React.useState('');
    const [toyValue, setToyValue] = React.useState('');
    const [toyImage, setToyImage] = React.useState('');

    console.log("TaskForm onClick Done");
    const handleSubmit = () => {
        onClickToyCreate({
            toyName: toyName,
            toyValue: toyValue,
            toyImage: toyImage
        });
        console.log(toyName);
        setToyName('');
        setToyValue('');
    };

    const handleValueChange = (e) => {
        const newValue = e.target.value
        if (newValue.match(/^\d*$/)) {
            setToyValue(newValue);
        }
        e.preventDefault()
    };

    const onUpload = (e) => {
        setToyImage(e.target.files[0]);
    };

    return (
        <center>

            <div style={taskStyle} >
                <div className="card-body bg-warning rounded">
                    <label htmlFor="type"> Toy Name:</label>
                    <input type="text"
                        value={toyName}
                        onChange={e => setToyName(e.target.value)} className="form-control">
                    </input>

                    <label htmlFor="type">Toy Value:</label>


                    <input type="text" value={toyValue}
                        onChange={handleValueChange}
                        className="form-control">
                    </input>

                    <label htmlFor="type">Toy Image:</label>
                    <input type="file" name="file" onChange={(e) => onUpload(e)} ></input>

                    <img src="parenthood1.svg" class="rounded float-right" width="50" height="50" alt="logo" /><br></br>
                    <button type="submit" className="btn btn-outline-success btn-lg btn-block" onClick={handleSubmit}>Create
                </button>

                    <div class="clearfix"></div>
                </div>
            </div>
        </center>
    );

}
const taskStyle = {
    color: 'black',
    width: '50%',
    marginBottom: '20px',

}
export default ToyForm