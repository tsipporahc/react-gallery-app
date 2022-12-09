import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Photos from './Photos';
import NotFound from './NotFound';

// Results.js is a component that renders the nav results or the search results
const Results = (props) => {
  const results = props.data; // data pulled from the api request
  const { input } = useParams();
  let location = useLocation();
  let pathName = location.pathname.slice(1);
  let photos;

  useEffect(() => {
    const fetchData = props.fetchData;
    if (input) {
      fetchData(input); // when :input param changes it will gather the string, and uses it in the fetchData function
    } else if (pathName) {
      fetchData(pathName); // takes the path from the url and uses that string, and uses it in the fetchData function
    } else {
      fetchData('red panda'); // when there is no input, or pathname, 'red panda' is used in the fetchData function
    } // eslint-disable-next-line
  }, [location.pathname, input]); // dependency array - it checks if the pathname or the :input change and when they do, useEffect runs.

  if (results.length > 0) {
    photos = results.map((photo) => (
      <Photos
        server={photo.server}
        id={photo.id}
        secret={photo.secret}
        key={photo.id}
        title={photo.title}
      />
    )); // maps over the photo data results from the response request, if results is greater than 0
  } else {
    photos = <NotFound />;
  } // renders the not found component, if the results is 0
  return (
    <div className="photo-container">
      {props.loading ? <p>Loading...</p> : <ul>{photos}</ul>}{' '}
      {/* if loading is true, then render a paragraph that says loading. if loading is false, then render photos results that were mapped */}
    </div>
  );
};

export default Results;
