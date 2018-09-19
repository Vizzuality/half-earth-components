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
    this.state = { isOpen: false };
  }

  componentDidMount() {
    const { isOpen } = this.props;
    this.setState({ isOpen });
  }

  render() {
    const { icon, title, children } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={cx(styles.cardContainer, { [styles.open]: isOpen })}>
        <div className={styles.headerContainer}>
          <h2 className={styles.groupTitle}>
            {title}
          </h2>
          <Button
            onClick={() => this.setState({ isOpen: !isOpen })}
            theme={{ button: styles.toggleButton }}
          >
            {
              icon &&
                (
                  <Icon
                    icon={icon}
                    theme={{ icon: isOpen ? styles.icon : styles.iconCollapse }}
                  />
                )
            }
          </Button>
        </div>
        {children}
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
  /** Any data structure to render */
  children: PropTypes.shape({}).isRequired
};

AccordionCard.defaultProps = { isOpen: false, icon: chevronIcon };

export default AccordionCard;
