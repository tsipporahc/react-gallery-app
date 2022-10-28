import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Photos from './Photos';
import NotFound from './NotFound';

const Results = (props) => {
    const results = props.data;
    const { input } = useParams();
    let location = useLocation();
    let animalName = location.pathname.slice(1);
    let photos;
    console.log(animalName);
    console.log(input);

    useEffect(() => {
        if (input) {
            props.fetchData(input);
        } else if (animalName) {
            props.fetchData(animalName);
        }
    }, [location.pathname, input]);

    /* useEffect(() => {
        if (location.pathname !== '/') {
            props.fetchData(location.pathname.replace('/', ''));
        } else if (input) {
            props.fetchData(input);
        }
    }, [input, location.pathname]); */

    /* useEffect(() => {
        if (input) {
            props.fetchData(input);
        }
    }, [input]);  */ // when :input param changes it will gather the string, and send it to your function.

    if (results.length > 0) {
        photos = results.map((photo) => (
            <Photos
                server={photo.server}
                id={photo.id}
                secret={photo.secret}
                key={photo.id}
                title={photo.title}
            />
        ));
    } else {
        photos = <NotFound />;
    }
    return (
        <div className="photo-container">
            {props.loading ? <p>Loading...</p> : <ul>{photos}</ul>}
        </div>
    );
};

export default Results;
