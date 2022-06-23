
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomeScreen from './Pages/Home/HomeScreen';
function App() {
  const user = {
    name:"aswick",
    email: "aswick@test.com",
    password:"55677889"
  };
  return (
    <div className="app">
      <Router>
        {!user?<h1>
          Login Screen
        </h1>:
        <HomeScreen></HomeScreen>}
      </Router>
    </div>
  );
}

export default App;
