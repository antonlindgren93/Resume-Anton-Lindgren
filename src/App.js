import { BrowserRouter as Router } from "react-router-dom";
import Modal from "./components/Modal";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
