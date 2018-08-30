import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './icon-styles.scss';
import infoIcon from 'assets/icons/info.svg';

/**
 * Icon component for displaying an icon
 */
const Icon = ({ icon, theme }) => (
  <svg className={cx(styles.icon, theme.icon)} viewBox={icon.viewBox}>
    <use xlinkHref={`#${icon.id}`} />
  </svg>
);

Icon.propTypes = {
  /** The icon itself */
  icon: PropTypes.object,
  /** Themable options */
  theme: PropTypes.shape({ icon: PropTypes.string }),
};

Icon.defaultProps = {
  theme: {},
  icon: infoIcon
};

export default Icon;
