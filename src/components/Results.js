import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Photos from './Photos';
import NotFound from './NotFound';

const Results = (props) => {
    const results = props.data;
    let photos;
    /*     let { value } = useParams();

    useEffect(() => {
        if (value) {
            props.fetchData(value);
        }
    }, []); */

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
            <ul>{photos}</ul>
        </div>
    );
};

export default Results;
