import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle Sign-in
    const signinUser = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page

        signInWithEmailAndPassword(auth, email, password)
            .then(() => alert("Signin Success"))
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={signinUser} className="auth-container">
            <h1>Sign In</h1>

            <label>Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
            />

            <label>Password</label>
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
            />

            <button type="submit">Sign In</button>
        </form>
    );
};

export default SigninPage;