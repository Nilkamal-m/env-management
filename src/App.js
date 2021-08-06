import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        {user ? <Home /> : <Login />}
      </div>
    </Router>
  );
}

export default App;
