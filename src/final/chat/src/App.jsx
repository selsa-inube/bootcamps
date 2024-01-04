import AppContextProvider from "./context";
import DataContextProvider from "./context/data.mocks.jsx";
import Chat from "./pages/chat";
import { GlobalStyles } from "./design/styles";

function App() {
  return (
    <AppContextProvider>
      <DataContextProvider>
        <GlobalStyles />
        <Chat />
      </DataContextProvider>
    </AppContextProvider>
  );
}

export default App;
