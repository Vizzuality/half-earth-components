
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from 'components/button';
import Icon from 'components/icon';
import arrowIcon from 'assets/icons/dropdown-arrow.svg';

import styles from './sidebar-styles.scss';


class Sidebar extends PureComponent {
  onClickToggle = () => {
    const { visible, onToggle } = this.props;
    if (onToggle) onToggle(!visible);
  }

  render() {
    const { labels, visible, children } = this.props;

    return (
      <aside className={cx(styles.sidebar, { [styles.visible]: visible })}>
        <Button theme={styles} onClick={this.onClickToggle}>
          <span className={styles.buttonText}>{visible ? labels.hide : labels.open}</span>
          <Icon theme={{ icon: cx(styles.icon, visible ? styles.iconHide : styles.iconOpen )}} icon={arrowIcon} />
        </Button>
        {children}
      </aside>
    );
  }
}

Sidebar.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
  labels: PropTypes.shape({
    open: PropTypes.string,
    hide: PropTypes.string,
  }),
  onToggle: PropTypes.func
}

Sidebar.defaultProps = {
  visible: true,
  children: null,
  labels: {
    open: 'Open',
    hide: 'Hide'
  },
  onToggle: (open) => console.info('visible:', open)
}

export default Sidebar;
