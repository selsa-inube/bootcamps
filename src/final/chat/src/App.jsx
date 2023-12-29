import { useState } from "react";
import "./App.css";
import AppContextProvider from "./context";
import Chat from "./pages/chat/index.jsx";
import { GlobalStyles } from "./design/styles/index";

function App() {
  return (
    <>
      <AppContextProvider>
        <GlobalStyles />
        <Chat />
      </AppContextProvider>
    </>
  );
}

export default App;
