"use client"
import React from "react";

export default async function LoginSection(allOrganizers) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loginSuccess, setLoginSuccess] = React.useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        // Check if the credentials are correct
        const correctEmail = "example@example.com";
        const correctPassword = "password123";
        if (email === correctEmail && password === correctPassword) {
            setLoginSuccess(true);
            console.log("Done");
        } else {
            setLoginSuccess(false);
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200 flex justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        And Take Control of Your Academic Conferences
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-control mt-6">
                                {loginSuccess ? (
                                    <div className="alert alert-success mt-4">Login successful!</div>
                                ) : (
                                    <button className="btn btn-primary" type="submit">
                                        Login
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
