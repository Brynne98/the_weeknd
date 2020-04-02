import React from 'react';
import {BrowserRouter} from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import './App.css';

class App extends React.Component {

    render() {
        return <BrowserRouter>
            <DefaultLayout/>
        </BrowserRouter>
    }
}

export default App;