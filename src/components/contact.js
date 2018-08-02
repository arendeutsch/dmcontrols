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
            disableSendBtn: true,
            nameError: true,
            emailError: true,
            subjectError: true,
            messageError: true,
        };
    }
    regEx = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');

    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState({
            email: email,
            emailError: !this.regEx.test(email),
        }, ()=> {
            if (!this.state.nameError
                && !this.state.emailError
                && !this.state.subjectError
                && !this.state.messageError) {
                this.setState({
                    disableSendBtn: false,
                });
            } else {
                this.setState({
                    disableSendBtn: true,
                });
            }
        });
    };

    handleNameChange = (event) => {
        const name = event.target.value;
        this.setState({
            name: name,
            nameError: !(name.length > 2),
        }, ()=> {
            if (!this.state.nameError
                && !this.state.emailError
                && !this.state.subjectError
                && !this.state.messageError) {
                this.setState({
                    disableSendBtn: false,
                });
            } else {
                this.setState({
                    disableSendBtn: true,
                });
            }
        });
    };

    handleSubjectChange = (event) => {
        const subject = event.target.value;
        this.setState({
            subject: subject,
            subjectError: !(subject.length > 2),
        }, ()=> {
            if (!this.state.nameError
                && !this.state.emailError
                && !this.state.subjectError
                && !this.state.messageError) {
                this.setState({
                    disableSendBtn: false,
                });
            } else {
                this.setState({
                    disableSendBtn: true,
                });
            }
        });
    };

    handleMessageChange = (event) => {
        const msg = event.target.value;
        this.setState({
            message: msg,
            messageError: !(msg.length > 2),
        }, ()=> {
            if (!this.state.nameError
                && !this.state.emailError
                && !this.state.subjectError
                && !this.state.messageError) {
                this.setState({
                    disableSendBtn: false,
                });
            } else {
                this.setState({
                    disableSendBtn: true,
                });
            }
        });
    };

    handleClearFields = () => {
        this.setState({
            name: '',
            nameError: true,
            email: '',
            emailError: true,
            subject: '',
            subjectError: true,
            message: '',
            messageError: true,
            disableSendBtn: true,
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
                            <FormControl className={classes.margin} required={true} error={this.state.nameError}>
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
                            <FormControl className={classes.margin} required={true} error={this.state.emailError}>
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
                            <FormControl className={classes.margin} required={true} error={this.state.subjectError}>
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
                            <FormControl className={classes.margin} required={true} error={this.state.messageError}>
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
                                    rows={5}
                                    id="input-message"
                                    value={this.state.message}
                                    onChange={this.handleMessageChange}
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item={true} xs={12} sm={6}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                disabled={this.state.disableSendBtn}
                                onClick={this.handleSendEmail}
                            >
                                Send Email
                            </Button>
                        </Grid>
                        <Grid item={true} xs={12} sm={6}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                onClick={this.handleClearFields}
                            >
                                Clear fields
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);