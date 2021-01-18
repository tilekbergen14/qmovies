import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import ContextProvider from "./MovieContext"
import AddMovie from "./components/AddMovie"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Route path="/" exact component={Homepage}/>
          <Route path="/movies/add" exact component={AddMovie}/>
          <Route path="/login/" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
