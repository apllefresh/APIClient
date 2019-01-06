import React, {Component} from 'react';
import {Col, ControlLabel, Grid, Row} from 'react-bootstrap';
import {NavMenu} from './NavMenu';
//import logo from 'src/img/github.png'

export class Layout extends Component {
    displayName = Layout.name;

    render() {
        return (
            <div>
                <Grid fluid>

                    <header
                        style={{height: '50px', width: '100%', backgroundColor: '#333', display:'inline-block'}}>
                        {/*<a href='/Login.html' >link to test.html</a>*/}
                       
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                            data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a style={{color: 'darkgrey', padding:'15px 15px 15px 15px'  }} className="navbar-brand" href="#">My Retail</a>
                                {/*</div>*/}
                                {/*<div className="navbar-collapse collapse">*/}
                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <ControlLabel style={{color: 'darkgrey', padding:'15px 15px 15px 15px'  }}>
                                                Алексеев К.Ю.
                                            </ControlLabel>
                                        </li>
                                        <li>
                                            <ControlLabel style={{color: 'darkgrey', padding:'15px 15px 15px 15px'  }}>
                                                Отдел: РКП
                                            </ControlLabel>
                                        </li>
                                        <li>
                                            <ControlLabel style={{color: 'darkgrey', padding:'15px 15px 15px 15px'  }}>
                                                Менеджер
                                            </ControlLabel>
                                        </li>
                                        <li><a style={{color: 'darkgrey', fontWeight: 'bold', padding:'15px 15px 15px 15px'  }} href='/Login.html'>Выйти</a></li>
                                    </ul>
                                    <form className="navbar-form navbar-right">
                                        <input type="text" className="form-control" placeholder="Поиск по сайту..."/>
                                    </form>
                                </div>
                            </div>
                        
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
                            style={{height: '50px', width: '100%', backgroundColor: '#333'}}>
                        <div>
                           
                            <div class="footer-copyright text-center py-3"
                                 style={{color: 'darkgrey', padding:'15px 15px 15px 15px'  }}>
                                <a href="https://github.com/apllefresh" style={{ color: 'darkgrey',fontWeight: 'bold' ,paddingRight:'10px'}} >applefresh</a>
                                
                                
                                <img src={require('./img/github.png')} alt="github" className="brand-logo"
                                     height='30px' width='30px' />
                                
                                <ControlLabel  style={{ color: 'darkgrey' ,paddingLeft:'10px'}} > 2019 Copyright ©
                                </ControlLabel>
                            </div>
                           
                        </div>
                    </footer>
                </Grid>
            </div>
        );
    }
}
