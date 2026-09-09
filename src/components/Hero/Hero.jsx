import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate('/catalog');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.subtitle}>You can find everything you want in our catalog</p>
        <button
          type="button"
          className={styles.button}
          onClick={handleViewNowClick}
        >
          View Now
        </button>
      </div>
    </section>
  );
};

export default Hero;