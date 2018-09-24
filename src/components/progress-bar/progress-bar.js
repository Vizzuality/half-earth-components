import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './progress-bar-styles.scss';

const ProgressBar = props => {
  const { percentage, theme, label } = props;
  return (
    <div className={cx(styles.container, theme.container)}>
      <div className={cx(styles.outerBar, theme.outerBar)}>
        <div
          className={cx(styles.progress, theme.progress)}
          style={{ width: `${percentage}%` }}
        />
        <span
          className={cx(styles.percentageLabel, theme.percentageLabel)}
          style={{ left: `${percentage}%` }}
        >
          {`${percentage}%`}
        </span>
      </div>
      <p className={cx(styles.label, theme.label)}>
        {`% ${label}`}
      </p>
    </div>
  );
};

ProgressBar.propTypes = {
  theme: PropTypes.shape({
    container: PropTypes.string,
    outerBar: PropTypes.string,
    progress: PropTypes.string,
    percentageLabel: PropTypes.string,
    label: PropTypes.string
  }),
  percentage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  label: PropTypes.string.isRequired
};

ProgressBar.defaultProps = { theme: {} };

export default ProgressBar;
