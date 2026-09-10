import { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = ({ images, name }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = images[selectedIndex];

  return (
      <div className={styles.gallery}>
          <div className={styles.gallerymain}>
            <img src={selectedImage.original} alt={name} />
          </div>

      <ul className={styles.gallerythumbs}>
        {images.map((image, index) => (
          <li key={image.thumb}>
            <button
              type="button"
              className={index === selectedIndex ? styles.thumbnailActive : styles.thumbnail}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={image.thumb} alt={`${name} thumbnail ${index + 1}`} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;