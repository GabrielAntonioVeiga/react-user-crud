import { useState } from "react";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { UserContextProvider } from "./contexts/UserContext";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <>
      <UserContextProvider>
        <div className="App">
          <GlobalStyles />
          <RoutesApp />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
