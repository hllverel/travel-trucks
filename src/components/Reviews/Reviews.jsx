import styles from './Reviews.module.css';

const STAR_COUNT = 5;

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.layout}>
      <ul>
        {reviews.map((review, index) => (
          <li className={styles.reviewcard} key={index}>
            <div className={styles.namearea}>
              <div className={styles.avatar}>
                {review.reviewer_name.charAt(0)}
              </div>
              <div className={styles.nameandstars}>
                <p>{review.reviewer_name}</p>
                <div className={styles.stars}>
                  {Array.from({ length: STAR_COUNT }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={
                        starIndex < review.reviewer_rating
                          ? styles.starFilled
                          : styles.starEmpty
                      }
                    >
                      <use href="/symbol-defs.svg#Star" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;