import { useState } from "react";
import "./App.css";
import AppContextProvider from "./context";
import Chat from "./pages/chat";
import { GlobalStyles } from "./design/styles";

function App() {
  return (
    <AppContextProvider>
      <GlobalStyles />
      <Chat />
    </AppContextProvider>
  );
}

export default App;
