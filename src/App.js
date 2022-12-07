import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Results from './components/Results';
import Nav from './components/Nav';
//import apiKey from './config';
import SearchForm from './components/SearchForm';
import Error from './components/Error';

// App.js is a container component that holds data fetch logic, photo state, and loading state.
function App() {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData('red panda');
  }, []);

  const fetchData = (keyword) => {
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

  return (
    <div className="container">
      <h1>Photo Search App</h1>
      <p>This is a simple search app</p>
      <SearchForm fetchData={fetchData} setLoading={setLoading} />
      <Nav data={fetchData} />

      {/* Search Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Results data={photo} loading={loading} fetchData={fetchData} />
          }
        />
        <Route
          path="/pandas"
          element={
            <Results data={photo} loading={loading} fetchData={fetchData} />
          }
        />
        <Route
          path="/elephants"
          element={
            <Results data={photo} loading={loading} fetchData={fetchData} />
          }
        />
        <Route
          path="/birds"
          element={
            <Results data={photo} loading={loading} fetchData={fetchData} />
          }
        />
        <Route
          path="/search/:input"
          element={
            <Results data={photo} loading={loading} fetchData={fetchData} />
          }
        />

        <Route path="/" element={<Results data={photo} loading={loading} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
