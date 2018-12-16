import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './components/NavMenu';
import { Footer } from './components/Footer';
import './Layout.css';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={1}>
            <NavMenu />
          </Col>
          <Col id="body" sm={12}>
            {this.props.children}
          </Col>
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Grid>
    );
  }
}
