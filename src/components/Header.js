import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Sync from 'material-ui/svg-icons/notification/sync'

class Header extends Component {
  render() {
    return (
      <AppBar title="Kindle 电子书架" iconElementRight={<IconButton><Sync /></IconButton>} />
    );
  }
}

export default Header;