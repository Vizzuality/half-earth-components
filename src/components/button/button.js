import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './button-styles.scss';

/**
 * Button component
 */
const Button = props => {
  const {
    link,
    children,
    circle,
    disabled,
    onClick,
    theme
  } = props;
  const notActionable = disabled || !onClick && !link && !children;
  const classNames = cx(styles.button, theme.button, {
    [styles.circle]: circle,
    [styles.disabled]: notActionable,
  });
  if (link) {
    return (
      <link.type
        {...link.props}
        className={cx(classNames, link.props.className)}
      >
        {children}
      </link.type>
    );
  }
  return (
    <button
      type="button"
      title={disabled ? 'Coming soon' : ''}
      disabled={disabled}
      className={classNames}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Any data structure to render */
  children: PropTypes.node,
  /** Link to which button click will redirect */
  link: PropTypes.node,
  /** Theming button with customized styles */
  theme: PropTypes.shape({ button: PropTypes.string }),
  /** Option to render button as a circle */
  circle: PropTypes.bool,
  /** Option to disable clicking button */
  disabled: PropTypes.bool,
  /** Function called on clicking button */
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  link: null,
  children: null,
  circle: false,
  onClick: () => {
  },
  theme: {}
};

export default Button;
