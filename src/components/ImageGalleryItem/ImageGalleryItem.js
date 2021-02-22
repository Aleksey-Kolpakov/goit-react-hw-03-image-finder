import React from 'react';

const ImageGalleryItem = ({src,id,openImage}) => {
    return (
<li onClick={openImage} className="ImageGalleryItm">
  <img src={src} alt="" className="ImageGalleryItem-image" />
</li>
    );
};

export default ImageGalleryItem;