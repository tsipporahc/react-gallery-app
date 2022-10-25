import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';
import axios from 'axios';

import Photos from './components/Photos';
import apiKey from './config';

// App is a container component that holds data fetch logic, and photo state
function App() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=puppies&per_page=24&format=json&nojsoncallback=1`
            )
            .then((response) => {
                setPhoto(response.data.photos.photo);
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }, []); // update photo state with response data

    console.log(photo);
    return (
        <div className="container">
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/?search=:keyword" element={<Results />} />
            </Routes>
        </div>
    );
}

export default App;
