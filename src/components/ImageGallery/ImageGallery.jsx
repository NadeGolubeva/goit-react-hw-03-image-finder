
import PropTypes from "prop-types"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css';

export const ImageGallery = ({images, controlModal}) => { 

    return (
    
<ul className={css.gallery}>
        <ImageGalleryItem
          controlModal={controlModal}
          images={images}
        />
</ul>
)
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  controlModal: PropTypes.func.isRequired,
}