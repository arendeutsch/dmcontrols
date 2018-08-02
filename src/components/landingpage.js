import React from 'react';

import { Grid, Cell } from 'react-mdl';

import welcomeImage from '../assets/img/banner-img.png';

class LandingPage extends React.Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-page">
                    <Cell col={12}>
                        <img
                            src={welcomeImage}
                            alt="landing-img"
                            className="landing-img"
                        />
                        <div className="banner-text">
                            <h1>D.M. Control Systems</h1>
                            <hr/>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;