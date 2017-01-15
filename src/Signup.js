import React from 'react'
import { Container, Divider, Form, Icon, Popup, Button,
    Header, Image, Modal, Segment } from 'semantic-ui-react'


export default class Signup extends React.Component {
    render() {
        const options = [
            { text: '남성', value: 'male' },
            { text: '여성', value: 'female' },
        ]

        return (
            <div>
                <Segment>
                <Header>회원가입</Header>
                <Form>
                    <Form.Field>
                    <label>이메일</label>
                    <input placeholder='user_id@mail.com' />
                    </Form.Field>
                    <Form.Group widths='equal'>
                        <Form.Input label='비밀번호' type='password' placeholder='Enter Password'/>
                        <Form.Input label='비밀번호 확인' type='password' placeholder='Enter Password'/>
                    </Form.Group>
                    <Divider />
                    <Form.Group widths='equal'>
                        <Form.Input label='이름' placeholder='문준석'/>
                        <Form.Select label='성별' options={options} placeholder='성별'/>
                        <Form.Input label='생년월일' placeholder='ex) 870428'/>
                    </Form.Group>
                </Form>
                <Button color='blue'>
                    확인
                </Button>
                <Button color='green'>
                    나중에
                </Button>
                </Segment>
            </div>
        );
    }
}