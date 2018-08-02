import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import project1 from '../assets/img/crane.jpg';
import project2 from '../assets/img/welding.jpg';
import project3 from '../assets/img/plant.jpg';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <Card shadow={0} style={{margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + project1 + ') center / cover'}}>Project 1</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{ margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + project2 + ') center / cover'}}>Project 2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Learn More</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{ margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + project3 + ') center / cover'}}>Project 3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Learn More</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;