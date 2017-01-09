import React from 'react'
import { Grid, Message } from 'semantic-ui-react'

const MessageWorklog = () => (
  <Message>
    <Message.Header>크라우드 테스트 프레임워크</Message.Header>
    <Message.List>
      <Message.Item>공지글 페이지입니다</Message.Item>
      <Message.Item>이런식으로 작성하면 됩니다.</Message.Item>
    </Message.List>
  </Message>
)

const MessageNewFeature = () => (
  <Message>
    <Message.Header>170108 기능 업데이트</Message.Header>
    <Message.List>
      <Message.Item>added React + Semantic UI + Babel</Message.Item>
      <Message.Item>created sidebar / menu</Message.Item>
      <Message.Item>created files(award, mypage, notices, projectes)</Message.Item>
    </Message.List>
  </Message>
)

export default class Notices extends React.Component {
    render() {
        return (
            <div>
                <MessageWorklog/>
                <MessageNewFeature/>
            </div>
        );
    }
}
 