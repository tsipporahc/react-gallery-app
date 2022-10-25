import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Nav from './components/Nav';
import apiKey from './config';

function App() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {});

    return (
        <div className="App">
            <div className="container">
                <h1>Photo Search App</h1>
                <p>This is a simple search app</p>

                <SearchForm />
                <Nav />
                <Results />
            </div>
        </div>
    );
}

export default App;
