import { useState } from 'react';
import styles from './ReservationForm.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!EMAIL_REGEX.test(email.trim())) {
      newErrors.email = 'Please enter a valid email.';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setName('');
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <div>
        <h3>Book your campervan now</h3>
        <p>Thank you! Your reservation request has been sent.</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>

      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name*
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? styles.inputError : styles.input}
          />
          {errors.name && (
            <span>
              <svg>
                <use href="/symbol-defs.svg#Error" />
              </svg>
            </span>
          )}
        </label>
        {errors.name && <p className={styles.errorText}>{errors.name}</p>}

        <label>
          Email*
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? styles.inputError : styles.input}
          />
          {errors.email && (
            <span>
              <svg>
                <use href="/symbol-defs.svg#Error" />
              </svg>
            </span>
          )}
        </label>
        {errors.email && <p className={styles.errorText}>{errors.email}</p>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ReservationForm;