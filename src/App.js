import React from 'react'
import { Link } from 'react-router'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import Notices from './Notices'
import MyPage from './MyPage'
import Home from './Home'
import Projects from './Projects'
import Awards from './Awards'


export default class App extends React.Component {
  state = {
    sidebarVisible: false,
    view: <Home/>,
  }
  
  toggleSidebar = () => this.setState({
    sidebarVisible: !this.state.sidebarVisible
  })

  changeView = (newView) => this.setState({
    view: newView,
    sidebarVisible: !this.state.sidebarVisible
  })

  render() {
    const { sidebarVisible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='uncover' width='thin' visible={sidebarVisible} icon='labeled' vertical inverted>
            <Menu.Item name='x' onClick={this.toggleSidebar}>
              <Icon name='x' />
            </Menu.Item>
            <Menu.Item name='alarm' onClick={this.changeView.bind(this, <Notices/>)}>
              <Icon name='alarm' />
              Notice
            </Menu.Item>
            <Menu.Item name='archive' onClick={this.changeView.bind(this, <Projects/>)}>
              <Icon name='archive' />
              Projects
            </Menu.Item>
            <Menu.Item name='user' onClick={this.changeView.bind(this, <MyPage/>)}>
              <Icon name='user' />
              My Page
            </Menu.Item>
            <Menu.Item name='trophy' onClick={this.changeView.bind(this, <Awards/>)}>
              <Icon name='trophy' />
              Awards
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment>
              <Menu>
              <Menu.Item name='content' onClick={this.toggleSidebar}>
                <Icon name='content' />
              </Menu.Item>
              </Menu>
              {this.state.view}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}


class MenuExampleStackable extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='http://semantic-ui.com/images/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    )
  }
}