import React, { useState } from "react";

function RegisterForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (name, email, password) => {
        onSubmit({ name, email, password });
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="card ">
            <div className="card-body bg-warning rounded">
                <h4 className="card-title">Sign up</h4>
                <div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Name" />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <img src="parenthood1.svg" class="rounded float-right" width="50" height="50" alt="logo" />
                        <button
                            className="btn btn-success float-left"
                            onClick={e => handleSubmit(name, email, password) }>
                            Create account
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RegisterForm;