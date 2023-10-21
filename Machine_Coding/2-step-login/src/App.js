import {useState} from "react";
import "./App.css";

function App() {
  const [track, setTrack] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateEmail() {
    if (email.trim()) {
      setTrack(1);
    } else {
      window.alert("Please add valid mail");
    }
  }

  function validatePassword() {
    if (password.trim()) {
      alert("Successful");
    } else {
      window.alert("Please add valid password");
    }
  }

  return (
    <div className="App">
      {track === 0 ? (
        <>
          <section>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button onClick={validateEmail}>Next</button>
          </section>
        </>
      ) : (
        <>
          <section>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={() => setTrack(0)}>Back</button>
            <button onClick={validatePassword}>Login</button>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
