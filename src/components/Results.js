import React from 'react';
import Photos from './Photos';
import NotFound from './NotFound';

const Results = () => {
    // const results = props.data;
    // let photos = results.map(photo => <Photos url={photo.imgs.url} key={photo.id}/>);
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <Photos />
        </div>
    );
};

export default Results;
