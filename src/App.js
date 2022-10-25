import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';

import Photos from './components/Photos';
import apiKey from './config';

function App() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {});

    return (
        <div className="container">
            <Routes>
                <Route path="/*" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
