import React, { useState } from 'react';

function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="card">
            <div className="card-body bg-warning rounded">
                <h4 className="card-title" >Login</h4>
                <div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
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
                        <img src="parenthood.svg" class="rounded float-right " width="50" height="50" alt="logo" />
                        <button
                            className="btn btn-success float-left"
                            onClick={() => onSubmit({ email, password })}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;