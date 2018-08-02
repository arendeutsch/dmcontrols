import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        width: 'calc(100% - 250px)',
    },
    margin: {
        margin: '10px',
        width: 'calc(100% - 250px)',
    },
    cssLabel: {
        color: grey[200],
        '&$cssFocused': {
            color: grey[50],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:before': {
            borderBottomColor: grey[200],
        },
        '&:after': {
            borderBottomColor: grey[50],
        },
    },
    input: {
        color: 'white',
    },
    contantForm: {
        textAlign: 'center',
    }
});

class Contact extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super();

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    handleSubjectChange = (event) => {
        this.setState({
            subject: event.target.value,
        });
    };

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value,
        });
    };

    render() {
        const position = [31.9771, 34.7987];
        const { classes } = this.props;
        return (
            <div className="contant-page">
                <Map className="leaflet-container" center={position} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={position}>
                        <Popup>
                            D.M. <br/> Control systems
                        </Popup>
                    </Marker>
                </Map>
                <div className="contact-form">
                    <h1>Get in touch</h1>
                    <Grid container={true} spacing={8} className={classes.contantForm}>
                        <Grid item={true} xs={12} sm={6}>
                            <FormControl className={classes.margin} required={true}>
                                <InputLabel
                                    FormLabelClasses={{
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused,
                                    }}
                                    htmlFor="input-name"
                                >Your Name</InputLabel>
                                <Input
                                    classes={{
                                        underline: classes.cssUnderline,
                                        input: classes.input,
                                    }}
                                    id="input-name"
                                    value={this.state.name}
                                    onChange={this.handleNameChange}
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item={true} xs={12} sm={6}>
                            <FormControl className={classes.margin} required={true}>
                                <InputLabel
                                    FormLabelClasses={{
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused,
                                    }}
                                    htmlFor="input-email"
                                >Your Email</InputLabel>
                                <Input
                                    classes={{
                                        underline: classes.cssUnderline,
                                        input: classes.input,
                                    }}
                                    id="input-email"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <FormControl className={classes.margin} required={true}>
                                <InputLabel
                                    FormLabelClasses={{
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused,
                                    }}
                                    htmlFor="input-subject"
                                >Subject</InputLabel>
                                <Input
                                    classes={{
                                        underline: classes.cssUnderline,
                                        input: classes.input,
                                    }}
                                    id="input-subject"
                                    value={this.state.subject}
                                    onChange={this.handleSubjectChange}
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <FormControl className={classes.margin} required={true}>
                                <InputLabel
                                    FormLabelClasses={{
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused,
                                    }}
                                    htmlFor="input-message"
                                >Your Message</InputLabel>
                                <Input
                                    classes={{
                                        underline: classes.cssUnderline,
                                        input: classes.input,
                                    }}
                                    multiline={true}
                                    id="input-message"
                                    value={this.state.message}
                                    onChange={this.handleMessageChange}
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Send Email
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);