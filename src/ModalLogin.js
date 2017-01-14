import React, { Link, Component } from 'react'
import { Form, Icon, Popup, Button, Header, Image, Modal } from 'semantic-ui-react'

export default class ModalLogin extends Component {
  state = { open: false }

  show = (dimmer) => {
    this.setState({ dimmer, open: true })
  }

  close = () => {
    this.setState({ open: false })
  }

  clickSignup = () => {
      <Link to='/signup'/>
  }

  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <Modal size='small' dimmer={dimmer} open={open} onClose={this.close} closeIcon>
          <Modal.Header>로그인</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Form>
              <Form.Field>
              <label>이메일</label>
              <input placeholder='user_id@mail.com' />
              </Form.Field>
              <Form.Field>
              <label>비밀번호</label>
              <input type='password' placeholder='Enter Password'/>
              </Form.Field>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button positive onClick={this.close}>
              로그인
            </Button>
            <Button color='blue' onClick={this.clickSignup}>
              회원가입
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}