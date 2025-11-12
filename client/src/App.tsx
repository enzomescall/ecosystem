import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/game")
      .then(r => r.json())
      .then(d => setMsg(d.message));
  }, []);

  return <h1>{msg || "Loading..."}</h1>;
}

export default App;
