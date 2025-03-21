import React from "react";

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                />

                <button>Cancel</button>
                <button>Login</button>
            </form>
        </div>
    );
}
