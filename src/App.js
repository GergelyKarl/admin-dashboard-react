import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./app.css"
function App() {
  return (
    <div className="App">
    <Topbar />
    <div className="container">
      <Sidebar />
 
    </div>
    </div>
  );
}

export default App;
