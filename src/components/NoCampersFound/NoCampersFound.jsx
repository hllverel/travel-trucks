import styles from './NoCampersFound.module.css';

const NoCampersFound = ({ onClear }) => {
  return (
    <div className={styles.container}>
        <img
            className={styles.notfoundimg}
            src="/public/images/NotFound.png"
            alt="No campers found"
        />

      <h2 className={styles.title}>No campers found</h2>
      <p className={styles.subtitle}>
        We couldn&apos;t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={styles.buttons}>
        <button type="button" className={styles.clearButton} onClick={onClear}>
          <svg>
            <use href="/symbol-defs.svg#Close" />
          </svg>
          Clear filters
        </button>
        <button type="button" className={styles.viewAllButton} onClick={onClear}>
          View all campers
        </button>
      </div>
    </div>
  );
};

export default NoCampersFound;