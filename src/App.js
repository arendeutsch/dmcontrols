import React, { Component } from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';

import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
          <Layout className="header-color">
            <Header className="header-color" title="D.M. Control Systems" scroll={true}>
              <Navigation>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="D.M. Control Systems">
              <Navigation>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main/>
            </Content>
            <Footer size="mini" className="footer">
              <FooterSection type="middle" logo="&copy; All rights reserved 2018">
                <FooterLinkList>
                </FooterLinkList>
              </FooterSection>
            </Footer>
          </Layout>
        </div>
    );
  }
}

export default App;
