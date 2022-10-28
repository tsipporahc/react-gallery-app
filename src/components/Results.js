import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Photos from './Photos';
import NotFound from './NotFound';

const Results = (props) => {
    const results = props.data;
    const { input } = useParams();
    let location = useLocation();
    let pathName = location.pathname.slice(1);
    let photos;

    useEffect(() => {
        if (input) {
            props.fetchData(input);
        } else if (pathName) {
            props.fetchData(pathName);
        }
    }, [location.pathname, input]); // when :input param changes it will gather the string, and send it to your function.

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
