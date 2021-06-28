import React from 'react';
import './App.css';
import DogeButton from "./DogeButton";
import {Link, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'about'}>About</Link>
            <Link to={'login'}>Login</Link>
        </nav>
        <Switch>
            <Route path={'/login'}>  {/* Login Page Route */}
                <Login/>
            </Route>
            <Route path={'/about'}>  {/* About Page Route */}
                <About/>
            </Route>
            <Route path={"/"}> {/* Home Page Route */}
                <Home/>
            </Route>
        </Switch>

        {/*<DogeButton/>*/}
    </div>
  );
}
export default App;
