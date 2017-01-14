import React from 'react'
import { Divider, Grid, Segment, Button} from 'semantic-ui-react'

export default class Bottom extends React.Component {
  render() {
    return (
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
    );
  }
}