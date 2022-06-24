import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/Home/HomeScreen";
import ProfileScreen from "./Pages/Profile/ProfileScreen";
import LoginScreen from "./Pages/LoginScreen/LoginScreen";
function App() {
  const user = null;
  return (
    <div className="app">
      <Router>{!user ? <LoginScreen/> : <Routes>
        <Route path="/profile" element={<ProfileScreen/>}></Route>
        <Route path="/" element={<HomeScreen/>}></Route>
        </Routes>}</Router>
    </div>
  );
}

export default App;
