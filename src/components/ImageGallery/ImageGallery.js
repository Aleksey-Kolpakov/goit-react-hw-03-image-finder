import React from 'react';
import fetchImages from '../../utils/backend-services'

const ImageGallery = ({ children }) => {
    return (
        <ul className="ImageGallery">
            {children}
        </ul>
    );
};

export default ImageGallery;