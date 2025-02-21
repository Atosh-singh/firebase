
import { useEffect, useState } from "react";
import { app } from "./firebase"; // Import initialized Firebase app
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./App.css";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        // Yes, you are logged in 
        console.log("User logged in", user);
        setUser(user);
      } else {
        // user is logged out
        console.log("User logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <SignupPage />
        <SigninPage />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}

export default App;
