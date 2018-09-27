import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Icon from 'components/icon';
import chevronIcon from 'assets/icons/chevron.svg';
import styles from './accordion-card-styles.scss';

class AccordionCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: props.isOpen };
  }

  toggleCard = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { icon, title, children, counter, theme } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={cx(styles.cardWrapper, theme.cardWrapper)}>
        <div
          className={cx(styles.cardContent, theme.cardContent, {
            [styles.open]: isOpen
          })}
        >
          <div className={cx(styles.headerContainer, theme.headerContainer)}>
            <h2 className={cx(styles.groupTitle, theme.groupTitle)}>
              {title}
            </h2>
            <div className={styles.headerContainer}>
              {
                counter &&
                  (
                    <span
                      className={cx(styles.groupCounter, theme.groupCounter)}
                    >
                      {counter}
                    </span>
                  )
              }
              <Button
                onClick={this.toggleCard}
                theme={{ button: styles.toggleButton }}
              >
                {
                  icon &&
                    (
                      <Icon
                        icon={icon}
                        theme={{
                          icon: isOpen ? styles.icon : styles.iconCollapse
                        }}
                      />
                    )
                }
              </Button>
            </div>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

AccordionCard.propTypes = {
  /** Initial state of the accordion */
  isOpen: PropTypes.bool,
  /** Icon to be displayed to represent toggle */
  icon: PropTypes.shape({}),
  /** Text to be displayed as header */
  title: PropTypes.string.isRequired,
  /** Counter of active elements */
  counter: PropTypes.number,
  /** Any data structure to render */
  children: PropTypes.node,
  /** Theming checkbox with customized styles */
  theme: PropTypes.shape({
    cardContainer: PropTypes.string,
    headerContainer: PropTypes.string,
    groupTitle: PropTypes.string,
    groupCounter: PropTypes.string
  })
};

AccordionCard.defaultProps = {
  isOpen: false,
  icon: chevronIcon,
  counter: null,
  theme: {},
  children: null
};

export default AccordionCard;
