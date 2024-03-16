import "./App.css";
import { loginEmailContext } from "./utils/Context/useContext";
import { useState } from "react";
import { Header, Footer, Container } from "./components/exportComponents";

function App() {
  const [loginEmail, setNewEmail] = useState("");

  const setLoginEmail = (loginEmail) => {
    setNewEmail(loginEmail);
  };

  return (
    <>
      <loginEmailContext.Provider value={{ loginEmail, setLoginEmail }}>
        <Header />
        <Container />
        <Footer />
      </loginEmailContext.Provider>
    </>
  );
}

export default App;
