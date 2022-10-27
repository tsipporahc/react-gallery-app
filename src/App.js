import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Results from './components/Results';
import Nav from './components/Nav';

import Photos from './components/Photos';
import apiKey from './config';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';

// App is a container component that holds data fetch logic, and photo state
function App() {
    const [photo, setPhoto] = useState([]);
    //const [query, setQuery] = useState();
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    /* useEffect(() => {
        console.log(location.pathname);
        if (location.pathname !== '/search') {
            fetchData(location.pathname.replace('/', ''));
        } else {
            fetchData();
        }
    }, [location.pathname]); */

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (keyword = 'pandas') => {
        axios
            .get(
                `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`
            )
            .then((response) => {
                setLoading(false);
                setPhoto(response.data.photos.photo);
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }; // update photo state with response data

    console.log(photo);
    console.log(loading);

    /* const performSearch = (query) => {
        axios
            .get(
                `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
            )
            .then((response) => {
                setQuery(response.data.photos.photo);
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }; */

    return (
        <div className="container">
            <h1>Photo Search App</h1>
            <p>This is a simple search app</p>
            <SearchForm onSearch={fetchData} />
            <Nav data={fetchData} />
            <Routes>
                <Route path="/pandas" element={<Results data={photo} />} />
                <Route path="/elephants" element={<Results data={photo} />} />
                <Route path="/birds" element={<Results data={photo} />} />
                <Route
                    path="/search/:input"
                    element={<Results data={photo} />}
                />

                <Route
                    path="/"
                    element={<Results data={photo} loading={loading} />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* {loading ? <p>'Loading...'</p> : <Results data={photo} />} */}
        </div>
    );
}

export default App;
