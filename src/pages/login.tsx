import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../config/firebaseAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function redirectToHome() {
    window.location.href = '/';
  }

  
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      redirectToHome(); // Redirect to dashboard on successful login
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleRegistration = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password);
      redirectToHome(); // Redirect to dashboard on successful registration
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Login or Register</h1>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <div>{error}</div>}
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      <form onSubmit={handleRegistration}>
        <h2>Register</h2>
        {error && <div>{error}</div>}
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LoginPage;
