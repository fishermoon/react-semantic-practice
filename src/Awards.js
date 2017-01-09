import React from 'react'
import {Grid, Card, Icon, Header, Image, Table } from 'semantic-ui-react'

const TableExampleCollapsing = () => {
  return (
    <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>레벨</Table.HeaderCell>
          <Table.HeaderCell>사용자</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='http://semantic-ui.com/images/avatar2/small/lena.png' shape='rounded' size='mini' />
              <Header.Content>
                쑤왕하트
                <Header.Subheader>전문 테스터</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            22
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='http://semantic-ui.com/images/avatar2/small/matthew.png' shape='rounded' size='mini' />
              <Header.Content>
                문준석
                <Header.Subheader>전문 프로그래머</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            15
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='http://semantic-ui.com/images/avatar2/small/lindsay.png' shape='rounded' size='mini' />
              <Header.Content>
                전지현
                <Header.Subheader>일반 사용자</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            12
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='http://semantic-ui.com/images/avatar2/small/mark.png' shape='rounded' size='mini' />
              <Header.Content>
                이성진
                <Header.Subheader>기업관계자</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            11
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

const CardExampleIndividualCard = () => (
  <Card>
    <Image src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        문준석
      </Card.Header>
      <Card.Meta>
        <span className='job'>
          Performance / Robustness
        </span>
      </Card.Meta>
      <Card.Description>
        미국 샌프란시스코
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='trophy' />
        22 Wins
      </a>
    </Card.Content>
  </Card>
)

export default class Home extends React.Component {
    render() {
        return (
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <CardExampleIndividualCard/>
                    </Grid.Column>
                    <Grid.Column>
                        <TableExampleCollapsing/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}