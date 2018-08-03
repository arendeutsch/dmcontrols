import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';


import project1 from '../assets/img/crane.jpg';
import project2 from '../assets/img/welding.jpg';
import project3 from '../assets/img/plant.jpg';

const styles = theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    grid: {
        padding: '50px 30px 0 30px',
    },
    root: {
        maxWidth: 400,
        flexGrow: 1,
        margin: 'auto',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        marginBottom: 20,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
});

const tutorialSteps = [
    {
        label: 'How to be happy :)',
        imgPath: 'static/media/crane.80f9b15a.jpg',
    },
    {
        label: '1. Work with something that you like, like…',
        imgPath: 'static/media/plant.c867cb06.jpg',
    },
    {
        label: '2. Keep your friends close to you and hangout with them',
        imgPath: 'static/media/welding.1401ab55.jpg',
    },
];

class Projects extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
        onNext: null,
        activeStep: 0,
    };

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            projectInfo: null,
            activeStep: 0,
        };
    }

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    handleStepChange = (activeStep) => {
        this.setState({ activeStep });
    };

    handleCloseInfo = () => {
        this.setState({
            open: false,
            projectInfo: null,
        });
    };

    handleClickOpen = () => {
        const { classes, theme } = this.props;
        const maxSteps = tutorialSteps.length;
        this.setState({
            projectInfo: (
                <Dialog
                    open={true}
                    onClose={this.handleCloseInfo}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Project Info</DialogTitle>
                    <DialogContent>
                        <div className={classes.root}>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={this.state.activeStep}
                                onChangeIndex={this.handleStepChange}
                                enableMouseEvents
                            >
                                {tutorialSteps.map(step => (
                                    <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
                                ))}
                            </SwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={this.state.activeStep}
                                className={classes.mobileStepper}
                                nextButton={
                                    <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === maxSteps - 1}>
                                        Next
                                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                        Back
                                    </Button>
                                }
                            />
                        </div>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseInfo} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            ),
        });
    };

    render() {
        const { classes } = this.props;
        return(
            <div>
                <Grid container={true} spacing={8} className={classes.grid}>
                    <Grid item={true} xs={12} sm={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={project1}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Project 1
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="medium"
                                    color="primary"
                                    onClick={this.handleClickOpen}
                                >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} sm={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={project2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Project 2
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="medium" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} sm={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={project3}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Project 3
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="medium" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                {this.state.projectInfo}
            </div>
        )
    }
}
export default withStyles(styles, {withTheme: true})(Projects);