import React from 'react'
import { List, Menu, Image, Icon } from 'semantic-ui-react'


export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSidebar(e) {
    this.props.onClick();
  }

  render() {
    return (
      <Menu>
        <Menu.Item name='content' onClick={this.toggleSidebar.bind(this)}>
        <Icon name='content' />
        </Menu.Item>
      </Menu>
    );
  }
}


TopMenu.propTypes = {
   onClick: React.PropTypes.func
}
