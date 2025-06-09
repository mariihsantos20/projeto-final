import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { Photos } from './Photos.jsx';
import { Link } from 'react-router-dom';

const Galery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Photos.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <Link to={item.link}>
        <img
          src={item.itemImageSrc}
          alt={item.alt}
          style={{ width: '100%', display: 'block' }}
        />
      </Link>
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: 'block' }}
      />
    );
  };

  return (
    <div className="card">
      <Galleria
        value={images}
        numVisible={5}
        circular
        style={{ maxWidth: '640px' }}
        showItemNavigators
        showItemNavigatorsOnHover
        showIndicators
        showThumbnails={false}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      />
    </div>
  );
};

export default Galery;
