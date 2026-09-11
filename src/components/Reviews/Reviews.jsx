import styles from './Reviews.module.css';

const STAR_COUNT = 5;

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>

      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <div>
              <div className={styles.avatar}>
                {review.reviewer_name.charAt(0)}
              </div>
              <div>
                <p>{review.reviewer_name}</p>
                <div>
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
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;