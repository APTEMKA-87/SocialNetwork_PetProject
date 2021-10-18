import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogContainer from './components/Dialogs/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path="/dialogs"
                   render={() => <DialogContainer/>}/>
            <Route path="/profile"
                   render={() => <ProfileContainer/>}/>
            <Route path="/users"
                   render={() => <UsersContainer/>}/>
        </div>
    </BrowserRouter>;
}

export default App;
