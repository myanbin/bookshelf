import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

class Header extends Component {
  render() {
    return (
      <AppBar title="Kindle 电子书架" iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github" />} />
    );
  }
}

export default Header;