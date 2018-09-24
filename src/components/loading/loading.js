import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './loading-styles.scss';

class Loading extends PureComponent {
  render() {
    const { theme, height } = this.props;
    return (
      <div className={cx(styles.container, theme.container)} style={{ height }}>
        <div className={cx(styles.loader, theme.loader)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={cx(styles.svg, theme.svg)}
          >
            <g strokeWidth="1" transform="translate(0.5, 0.5)">
              <g strokeWidth="1">
                <circle
                  fill="none"
                  strokeWidth="1"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  cx="12"
                  cy="12"
                  r="11"
                  strokeLinejoin="miter"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

Loading.propTypes = {
  theme: PropTypes.shape({
    container: PropTypes.string,
    loader: PropTypes.string,
    svg: PropTypes.string
  }),
  height: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ])
};

Loading.defaultProps = { theme: {}, height: 'auto' };

export default Loading;
