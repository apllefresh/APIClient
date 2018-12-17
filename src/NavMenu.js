import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import {InventoryHead} from './components/Inventory/InventoryHead';

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={'/'}>ReactClient</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                      
                    <LinkContainer to={'/inventory'} Component={InventoryHead}>
                        <NavItem>
                            <Glyphicon glyph='education' /> inventory
                        </NavItem>
                    </LinkContainer>

                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
