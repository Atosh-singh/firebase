import React, { useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle Email Signup
    const createUser = (e) => {
        e.preventDefault(); // Prevent page reload
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => alert("Success"))
            .catch((err) => console.log(err));
    };

    // Handle Google Signup
    const signupWithGoogle = (e) => {
        e.preventDefault(); // Prevent form submission
        signInWithPopup(auth, googleProvider)
            .then(() => console.log("Google Sign-In Successful"))
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={createUser} className="auth-container">
            <h1>Sign Up</h1>

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

            <button type="submit">Sign Up</button>
            <button onClick={signupWithGoogle}>Sign in with Google</button>
        </form>
    );
};

export default SignupPage;