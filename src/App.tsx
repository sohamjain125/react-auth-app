import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm.tsx";
import LoginForm from "./components/LoginForm.tsx";
import "./styles/forms.css";

const App: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <div className="App">
      <h1>{showSignUp ? "Sign Up" : "Login"}</h1>
      {showSignUp ? <SignUpForm /> : <LoginForm />}
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Go to Login" : "Go to Sign Up"}
      </button>
    </div>
  );
};

export default App;
