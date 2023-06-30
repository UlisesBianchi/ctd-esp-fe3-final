import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextProvider } from "./Components/utils/global.context";
import { ContextGlobal } from "./Components/utils/global.context";
import { useContext } from "react";

function App() {
  return (
    <ContextProvider>
      <AppContent />
    </ContextProvider>
  );
}

function AppContent() {
  const { state } = useContext(ContextGlobal);
  const theme = state.theme === "dark" ? "dark" : "light";

  return (
    <>
      <div className={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
