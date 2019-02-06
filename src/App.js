import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from './TodoApp'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Login} from "./component/Login";


const LoginView = () => (
    <Login/>
);
const TodoView = () => (
    <TodoApp/>
);
localStorage.setItem('user', "nicoga97");
localStorage.setItem('password', "123456");



class App extends Component {


    constructor(props) {
        super(props);



    }

    render() {

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <br/>
                    <br/>

                    <ul>
                        {localStorage.getItem('isLoggedIn')==="true"
                            ? <li><Link to="/todo">Todo</Link></li>
                            : <li><Link to="/">Login</Link></li>
                        }

                    </ul>

                    <div>
                        {localStorage.getItem('isLoggedIn')==="true"
                            ? <Route path="/todo" component={TodoView}/>
                            : <Route exact path="/" component={LoginView}/>
                        }


                    </div>
                </div>
            </Router>
        )
    }

}

export default App;