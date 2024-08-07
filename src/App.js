import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => {
    return <h1>Welcome to the Home page!</h1>;
};

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/home" component={Home} />
            </div>
        </Router>
    );
};

export default App;