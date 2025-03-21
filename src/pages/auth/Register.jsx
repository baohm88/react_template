import React from "react";

export default function Register() {
    return (
        <div>
            <h1>Register New Account</h1>
            <form action="">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                />
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
                <button>Register</button>
            </form>
        </div>
    );
}
