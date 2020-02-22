import React from 'react';
import './gallery/Gallery.css';
import UploadButton from './gallery/UploadButton';
import Image from './gallery/Image';

const Gallery = ({ Images }) => {

    return (
        <div style={containerStyle}>
            <UploadButton />
            {Images.map((image, key) => <Image src={image.url} {...{ key }} />)}
        </div>
    );
}

const containerStyle = {
    margin: '10vh 2%'
}

export default Gallery;
