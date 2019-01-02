import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import {InventoryHead} from './components/Inventory/InventoryHead';
import {Warehouses} from './components/Inventory/Warehouses';
import {Remains} from './components/Inventory/Remains';
import {ReSortHead} from "./components/ManageBOL/Resort/ReSortHead";
import {RePriceHead} from "./components/ManageBOL/RePrice/RePriceHead";
import {MovingHead} from "./components/ManageBOL/Moving/MovingHead";

export class NavMenu extends Component {
    displayName = NavMenu.name;

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
                    <LinkContainer to={'/warehouses'} Component={Warehouses}>
                        <NavItem>
                            <Glyphicon glyph='education' /> warehouses
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/remains'} Component={Remains}>
                        <NavItem>
                            <Glyphicon glyph='education' /> remains
                        </NavItem>
                    </LinkContainer>
                    
                    <LinkContainer to={'/resortHead'} Component={ReSortHead}>
                        <NavItem>
                            <Glyphicon glyph='education' /> resortHead
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/rePriceHead'} Component={RePriceHead}>
                        <NavItem>
                            <Glyphicon glyph='education' /> RePriceHead
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/movingHead'} Component={MovingHead}>
                        <NavItem>
                            <Glyphicon glyph='education' /> movingHead
                        </NavItem>
                    </LinkContainer>


                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
