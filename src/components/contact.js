import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
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
});

class Contact extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super();

        this.state = {
            name: '',
        };
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
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
                    <FormControl className={classes.margin}>
                        <InputLabel
                            FormLabelClasses={{
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            }}
                            htmlFor="custom-css-input"
                        >
                            Your Name
                        </InputLabel>
                        <Input
                            classes={{
                                underline: classes.cssUnderline,
                                input: classes.input,
                            }}
                            id="custom-css-input"
                        />
                    </FormControl>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);