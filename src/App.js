import React from 'react'
import { Link } from 'react-router'
import { Divider, List, Grid, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
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
              {this.state.view}
              <GridExampleStretched/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}


class TopMenu extends React.Component {
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


const GridExampleStretched = () => (
  <Segment inverted>
    <Grid columns={3} divided >
      <Grid.Row>
        <Grid.Column>
          <h4>Content</h4>
          <Divider clearing />
          <p> Articles</p>
          <p> Courses</p>
          <p> Projects</p>
          <p> Tools</p>
        </Grid.Column>
        <Grid.Column>
          <h4>Help & Resource</h4>
          <Divider clearing />
          <p> Help</p>
          <p> How to Sign up</p>
          <p> How to Make Money</p>
        </Grid.Column>
        <Grid.Column>
          <h4>About our Company</h4>
          <Divider clearing />
          <p> Rules of Engagement</p>
          <p> How to Sign up</p>
          <p> How to Make Money</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)