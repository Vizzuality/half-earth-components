import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './checkbox-styles.scss';

const Checkbox = props => {
  const {
    id,
    label,
    checked,
    onChange,
    theme,
    checkboxFirst,
    disabled
  } = props;
  return (
    <label
      className={cx(
        styles.container,
        {
          [styles.checkboxFirst]: checkboxFirst,
          [theme.checkboxFirst]: checkboxFirst
        },
        theme.container
      )}
      htmlFor={id}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        className={cx(styles.input, theme.input)}
        disabled={disabled}
      />
      <span className={cx(styles.label, theme.label)}>
        {label}
      </span>
      <div className={cx(styles.checkbox, theme.checkbox)} />
    </label>
  );
};

Checkbox.propTypes = {
  /** Checkbox id */
  id: PropTypes.string,
  /** Text to be displayed on the side of the checkbox */
  label: PropTypes.string,
  /** Boolean that indicates wether is checked */
  checked: PropTypes.bool,
  /** Option to disable checkbox */
  disabled: PropTypes.bool,
  /** Function called on value change */
  onChange: PropTypes.func.isRequired,
  /** Boolean that indicates wether the checkbox is displayed before or after the label */
  checkboxFirst: PropTypes.bool,
  /** Theming checkbox with customized styles */
  theme: PropTypes.shape({
    container: PropTypes.string,
    input: PropTypes.string,
    label: PropTypes.string,
    checkboxFirst: PropTypes.string,
    checkbox: PropTypes.string
  })
};

Checkbox.defaultProps = {
  id: Math.random().toString(36).substring(2, 15),
  theme: {},
  label: '',
  checked: false,
  disabled: false,
  checkboxFirst: true
};

export default Checkbox;
