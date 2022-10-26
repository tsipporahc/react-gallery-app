import React from 'react';

//img - https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg

const Photos = (props) => {
    return (
        <li>
            <img
                src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
                alt={props.title}
            />
        </li>
    );
};

export default Photos;
