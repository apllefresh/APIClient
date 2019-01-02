import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './NavMenu.css';
import {InventoryHead} from './components/Inventory/InventoryHead';
import {Warehouses} from './components/Inventory/Warehouses';
import {Remains} from './components/Inventory/Remains';
import {ReSortHead} from "./components/ManageBOL/Resort/ReSortHead";
import {RePriceHead} from "./components/ManageBOL/RePrice/RePriceHead";
import {MovingHead} from "./components/ManageBOL/Moving/MovingHead";
import {RequestHead} from "./components/ManageBOL/Requests/RequestHead";
import {InvoiceHead} from "./components/ManageBOL/Invoices/InvoiceHead";
import {InventoryDates} from "./components/Inventory/InventoryDates";
import {InventoryResult} from "./components/Inventory/InventoryResult";
import {AnnulmentHead} from "./components/ManageBOL/Annulment/AnnulmentHead";

export class NavMenu extends Component {
    displayName = NavMenu.name;

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>ReactClient</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>

                        <LinkContainer to={'/inventory'} Component={InventoryHead}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Инвентаризаия
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/InventoryDates'} Component={InventoryDates}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Даты инвентаризации
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/warehouses'} Component={Warehouses}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Склады
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/remains'} Component={Remains}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Товарные остатки
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/InventoryResult'} Component={InventoryResult}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Результаты инвентаризации
                            </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/resortHead'} Component={ReSortHead}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Пересорт
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/rePriceHead'} Component={RePriceHead}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Переоценка
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/movingHead'} Component={MovingHead}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Перемещения
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/RequestHead'} Component={RequestHead}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Заявки
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/InvoiceHead'} Component={InvoiceHead}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Накладные
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/AnnulmentHead'} Component={AnnulmentHead}>
                            <NavItem>
                                <Glyphicon glyph='education'/> Списание
                            </NavItem>
                        </LinkContainer>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
