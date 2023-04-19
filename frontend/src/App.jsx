import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/home/Profile/Profile";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "40%", left: "-8rem" }}></div>
      {/* <Home /> */}
      {/* <Profile /> */}
      <Auth />
    </div>
  );
}

export default App;
