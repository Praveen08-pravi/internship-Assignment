import { useState } from "react";
import "./style.css";

function App() {
  const [mood, setMood] = useState("Select your mood");

  return (
    <div className="container">
      <h2>Mood Tracker</h2>

      <div className="buttons">
        <button onClick={() => setMood("😊 Happy")}>Happy</button>
        <button onClick={() => setMood("😢 Sad")}>Sad</button>
        <button onClick={() => setMood("😡 Angry")}>Angry</button>
        <button onClick={() => setMood("😴 Tired")}>Tired</button>
      </div>

      <h3>{mood}</h3>
    </div>
  );
}

export default App;