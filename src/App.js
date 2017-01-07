import React from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'


export default class App extends React.Component {
  render() {
    return (
      <div>
      <SidebarLeftPush/>
      </div>
    )
  }
}

class SidebarLeftPush extends React.Component {
  state = { visible: false }
  
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='alarm'>
              <Icon name='alarm' />
              Notice
            </Menu.Item>
            <Menu.Item name='archive'>
              <Icon name='archive' />
              Projects
            </Menu.Item>
            <Menu.Item name='user'>
              <Icon name='user' />
              My Page
            </Menu.Item>
            <Menu.Item name='trophy'>
              <Icon name='trophy' />
              Awards
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Menu.Item name='content' onClick={this.toggleVisibility}>
                <Icon name='content' />
              </Menu.Item>
            <Header as='h3'>Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}


class Main extends React.Component {
  render() {
    return (
      <Segment>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    )
  }
}