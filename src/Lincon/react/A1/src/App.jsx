import { useState } from "react";
import reactCarnet from "./assets/carnet.jpeg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Container } from "./styles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} id="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactCarnet} className="react" id="logo" alt="React logo" />
        </a>
      </Container>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          La cuenta es: {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
