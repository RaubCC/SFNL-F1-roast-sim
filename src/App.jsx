import React, { useState } from "react";

const drivers = [
  "Max Verstappen", "Yuki Tsunoda",
  "Charles Leclerc", "Lewis Hamilton",
  "George Russell", "Kimi Antonelli",
  "Lando Norris", "Oscar Piastri",
  "Fernando Alonso", "Lance Stroll",
  "Alex Albon", "Carlos Sainz",
  "Isack Hadjar", "Esteban Ocon",
  "Oliver Bearman", "Nico Hülkenberg",
  "Gabriel Bortoleto", "Pierre Gasly",
  "Jack Doohan"
];

const driverRoasts = {
  "Max Verstappen": [
    "You picked Max? Groundbreaking. You also probably order plain cheese pizza.",
    "Red Bull’s real strategy: give Max a steering wheel and pray he doesn’t get bored.",
    "Max fans only fear three things: FIA rules, seagulls, and the boredom of being a lap ahead.",
    "If Max retired tomorrow, 60% of F1 Twitter would vanish in a puff of Monster Energy.",
    "Picking Max is like choosing ‘easy mode’ on a game, but still screaming at the screen."
  ],
  "Yuki Tsunoda": [
    "Yuki’s radio messages are more unhinged than your search history.",
    "You root for Yuki? Good luck surviving his next team radio meltdown.",
    "His talent is huge. His patience? Shorter than a Canadian summer.",
    "Yuki overtakes by sheer rage. Scientists still can’t explain it.",
    "Pick Tsunoda if you want your blood pressure to spike on Lap 2."
  ],
  // ... (all your other driver roasts here, as you pasted above!)
  "Jack Doohan": [
    "Doohan: main character energy, side character results.",
    "He’s the only Jack with more hype than laps finished.",
    "Australian optimism meets Alpine pessimism—a cursed combo.",
    "If you like drama, pick Doohan and watch the season unfold like a slow-motion car crash.",
    "He’s only famous because his dad is cooler than yours."
  ]
};

function getRandomRoast(driver) {
  const roasts = driverRoasts[driver];
  if (!roasts) {
    return `No roast loaded yet for ${driver}. But let's be honest: if they're new, they're about to get cooked by the grid anyway.`;
  }
  return roasts[Math.floor(Math.random() * roasts.length)];
}

export default function App() {
  const [selectedDriver, setSelectedDriver] = useState(drivers[0]);
  const [roast, setRoast] = useState("");

  const handleRoast = () => {
    setRoast(getRandomRoast(selectedDriver));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: 500, margin: "auto", fontFamily: "system-ui" }}>
      <h1>SFNL F1 Roast Sim</h1>
      <label htmlFor="driver">Choose your victim:</label>
      <br />
      <select
        id="driver"
        value={selectedDriver}
        onChange={e => setSelectedDriver(e.target.value)}
        style={{ marginTop: 8, marginBottom: 12, fontSize: 16, padding: 4 }}
      >
        {drivers.map(driver => (
          <option key={driver} value={driver}>{driver}</option>
        ))}
      </select>
      <br />
      <button
        onClick={handleRoast}
        style={{
          background: "#111",
          color: "#fff",
          border: "none",
          padding: "10px 22px",
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 18,
          cursor: "pointer"
        }}
      >
        Roast Them
      </button>
      {roast && (
        <div
          style={{
            marginTop: 32,
            padding: 20,
            border: "2px solid #d00",
            borderRadius: 10,
            background: "#222",
            color: "#f7bebe",
            fontSize: 20,
            fontStyle: "italic"
          }}
        >
          {roast}
        </div>
      )}
    </div>
  );
}
