import { Galleria } from 'primereact/galleria';
import PropTypes from 'prop-types';

const Galery = ({ 
    images = [], 
    showThumbs = false, 
    width = '640px', 
    height = '570px', 
    radius = '8px' 
}) => {

    const itemTemplate = (item) => {
        return (
            <img
                src={item.src}
                alt="Product image"
                style={{
                    width: '100%',
                    height: height,
                    borderRadius: radius,
                    objectFit: 'cover',
                    display: 'block'
                }}
            />
        );
    };

    const thumbnailTemplate = (item) => {
        return (
            <img
                src={item.src}
                alt="Product thumbnail"
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: radius,
                    objectFit: 'cover',
                    display: 'block'
                }}
            />
        );
    };

    return (
        <div style={{ maxWidth: width, width: '100%' }}>
            <Galleria
                value={images}
                numVisible={5}
                circular
                showItemNavigators
                showItemNavigatorsOnHover
                showIndicators
                showThumbnails={showThumbs}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                style={{ width: '100%' }}
            />
        </div>
    );
};

Galery.propTypes = {
    images: PropTypes.array.isRequired,
    showThumbs: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    radius: PropTypes.string,
};

export default Galery;
