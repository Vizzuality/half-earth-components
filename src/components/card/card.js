import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './card-styles.scss';

/**
 * Represents a card with title and description
 */
class Card extends PureComponent {
  render() {
    const { image, children, theme } = this.props;
    return (
      <div className={cx(styles.card, theme.card)}>
        {image && (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={cx(styles.image, theme.image)}
          />
        )
        }
        <div className={cx(styles.content, theme.content)}>
          {children}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    card: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    data: PropTypes.string,
    contentContainer: PropTypes.string
  })
};

Card.defaultProps = { theme: {}, image: 'https://via.placeholder.com/350x150' };

export default Card;
