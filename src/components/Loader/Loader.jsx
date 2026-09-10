import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.spinner} />
        <h2 className={styles.title}>Loading tracks...</h2>
        <p className={styles.subtitle}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
};

export default Loader;