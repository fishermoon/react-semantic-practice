import React from 'react'
import { Divider, List, Grid, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import Notices from './Notices'
import MyPage from './MyPage'
import Home from './Home'
import Projects from './Projects'
import Awards from './Awards'
import Bottom from './Bottom'
import TopMenu from './TopMenu'

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
          <Sidebar as={Menu} animation='uncover' width='thin' visible={sidebarVisible} vertical inverted>
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
              <TopMenu onClick={this.toggleSidebar}/>
              {this.props.children}
              <Bottom/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}