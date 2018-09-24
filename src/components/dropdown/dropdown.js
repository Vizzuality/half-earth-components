import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './dropdown-styles.scss';
import defaultTheme from './themes/inline-theme.scss';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { closed: true };
  }

  toggleOpen = () => {
    const { closed } = this.state;
    this.setState({ closed: !closed });
  };

  selectItem = item => {
    const { onSelect } = this.props;
    onSelect(item);
    this.setState({ closed: true });
  };

  render() {
    const { selected, options, theme } = this.props;
    const { closed } = this.state;
    return (
      <span className={cx(styles.container, theme.container)}>
        <div
          onClick={this.toggleOpen}
          className={cx(styles.label, theme.label, { [styles.closed]: closed })}
        >
          {selected.label}
        </div>
        <ul
          className={cx(styles.options, theme.options, {
            [styles.closed]: closed
          })}
        >
          {options.map(option => (
            <li
              key={option.slug}
              className={cx(styles.option, theme.option, {
                [styles.optionSelected]: option.slug === selected.slug,
                [theme.optionSelected]: option.slug === selected.slug
              })}
              onClick={() => this.selectItem(option)}
            >
              {option.label}
            </li>
          ))}
          {
            !closed &&
              (
                <button
                  type="button"
                  className={cx(styles.closeButton, theme.closeButton)}
                  onClick={this.toggleOpen}
                />
              )
          }
        </ul>
      </span>
    );
  }
}

Dropdown.propTypes = {
  /** Function to be triggered after selection selection */
  onSelect: PropTypes.func.isRequired,
  /** Available options for selection */
  options: PropTypes.shape().isRequired,
  /** Selected option */
  selected: PropTypes.shape({
    slug: PropTypes.string,
    label: PropTypes.string
  }).isRequired,
  /** Theming dropdown with customized styles.
   * There are two available themes under '/themes' folder
   * block-theme.scss
   * inline-theme.scss
   */
  theme: PropTypes.shape({
    container: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.string,
    option: PropTypes.string,
    optionSelected: PropTypes.string,
    closeButton: PropTypes.string
  })
};

Dropdown.defaultProps = { theme: defaultTheme };

export default Dropdown;
