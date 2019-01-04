import React, {Component} from 'react';
import {Col, Grid, Row, Panel} from 'react-bootstrap';
import {NavMenu} from './NavMenu';

export class Layout extends Component {
    displayName = Layout.name;

    render() {
        return (
            <div>
                <Grid fluid>

                    <header
                        style={{height: '50px', width: '100%', backgroundColor: 'DarkGray'}}>

                    </header>
                    <main>
                        <Row style={{height: '100%'}}>
                            <Col sm={2} style={{height: '100%', padding: '0px'}}>
                                <NavMenu/>
                            </Col>
                            <Col id="body" sm={10}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </main>

                </Grid>


                <Grid fluid>

                    <footer className="navbar-fixed-bottom"
                            style={{height: '50px', width: '100%', backgroundColor: 'DarkGray'}}>
                        <div>
                            <a href="https://coreui.io">CoreUI</a>
                            <span>&copy; 2018 creativeLabs.</span>
                        </div>
                        <div className="ml-auto">
                            <span>Powered by</span>
                            <a href="https://coreui.io">CoreUI</a>
                        </div>
                    </footer>
                </Grid>
            </div>
        );
    }
}
