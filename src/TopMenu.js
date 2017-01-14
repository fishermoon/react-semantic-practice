import React from 'react'
import { Button, Dropdown, List, Menu, Image, Icon } from 'semantic-ui-react'
import ModalLogin from './ModalLogin'

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
      _clickLogin: false,
  }

  clickLogin = () => {
    {this._child.show('blurring')};
  }

  toggleSidebar(e) {
    this.props.onClick();
  }

  render() {
    return (
      <Menu inverted>
        <Menu.Item name='content' onClick={this.toggleSidebar.bind(this)}>
        <Icon name='content' />
        </Menu.Item>
        <Dropdown text='디자인의뢰' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item>콘테스트 개최</Dropdown.Item>
                <Dropdown.Item>고객 평점 & 후기</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>이용방법 안내</Dropdown.Item>
                <Dropdown.Item>가격 안내</Dropdown.Item>
                <Dropdown.Item>공모전 대행문의</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='콘테스트 리스트' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item>진행중인 콘테스트</Dropdown.Item>
                <Dropdown.Item>심사중인 콘테스트</Dropdown.Item>
                <Dropdown.Item>종료된 콘테스트</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='포트폴리오' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item>대표 성공사례</Dropdown.Item>
                <Dropdown.Item>로고 컬렉션</Dropdown.Item>
                <Dropdown.Item>전체 포트폴리오</Dropdown.Item>
                <Dropdown.Item>고객 후기</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='디자인 소식' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item>뉴스</Dropdown.Item>
                <Dropdown.Item>이벤트 & 지원혜택</Dropdown.Item>
                <Dropdown.Item>사이트 광고안내</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='디자이너' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item>디자이너 리스트</Dropdown.Item>
                <Dropdown.Item>채용</Dropdown.Item>
                <Dropdown.Item>커뮤니티</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='고객센터' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item>자주하는 질문</Dropdown.Item>
                <Dropdown.Item>문의 게시판</Dropdown.Item>
                <Dropdown.Item>공지사항</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <ModalLogin ref="modalLogin"/>
        <Menu.Menu position='right'>
            <Menu.Item name='login' onClick={this.clickLogin}>
                <Icon name='user'/>
                로그인
                <ModalLogin ref={(child) => { this._child = child; }} />
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

TopMenu.propTypes = {
   onClick: React.PropTypes.func,
}