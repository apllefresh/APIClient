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
import {ReturnToShipperHead} from "./components/ManageBOL/ReturnToShipper/ReturnToShipperHead";
import {ProductGroups} from "./components/Product/ProductGroups";
import {Shippers} from "./components/Product/Shippers";
import {ProductHead} from "./components/Product/ProductHead";
import {ProductPrintTemplates} from "./components/Settings/ProductPrintTemplates";
import {RouteEditor} from "./components/Settings/RouteEditor";

export class NavMenu extends Component {
    displayName = NavMenu.name;

    constructor(props) {
        super(props);
        this.state = {
            Show: 0,
        };

    }

    render() {
        return (
            <Navbar inverse fluid collapseOnSelect>
               
                <Navbar.Collapse>
                    <Nav>
                        <NavItem onClick={() => this.setState({Show: (this.state.Show === 1 ? 0 : 1) })}>
                            <Glyphicon glyph='education'/> Инвентаризация
                        </NavItem>
                        {
                            this.state.Show === 1 ?
                                <div>
                                    <LinkContainer to={'/inventory'} Component={InventoryHead}>
                                        <NavItem>
                                            <Glyphicon glyph='education'/> Акты инвентаризации
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
                                </div>
                                : <p></p>
                        }
                        <NavItem onClick={() => this.setState({Show: (this.state.Show === 2 ? 0 : 2)})}>
                            <Glyphicon glyph='education'/> Накладные
                        </NavItem>
                        {
                            this.state.Show === 2 ?
                                <div>
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
                                    <LinkContainer to={'/ReturnToShipperHead'} Component={ReturnToShipperHead}>
                                        <NavItem>
                                            <Glyphicon glyph='education'/> Возврат поставщику
                                        </NavItem>
                                    </LinkContainer>
                                </div>
                                : <p></p>
                        }

                        <NavItem onClick={() => this.setState({Show: (this.state.Show === 3 ? 0 : 3)})}>
                            <Glyphicon glyph='education'/> Продукты
                        </NavItem>
                        {
                            this.state.Show === 3 ?
                                <div>
                                    <LinkContainer to={'/ProductGroups'} Component={ProductGroups}>
                                        <NavItem>
                                            <Glyphicon glyph='education'/> Товарные группы
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/Shippers'} Component={Shippers}>
                                        <NavItem>
                                            <Glyphicon glyph='education'/> Поставщики
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/ProductHead'} Component={ProductHead}>
                                        <NavItem>
                                            <Glyphicon glyph='education'/> Товары
                                        </NavItem>
                                    </LinkContainer>
                                </div>
                                : <p></p>
                        }
                        <NavItem onClick={() => this.setState({Show: (this.state.Show === 4 ? 0 : 4)})}>
                            <Glyphicon glyph='education'/> Настройки
                        </NavItem>
                        {
                            this.state.Show === 4 ?
                                <div>
                                    <LinkContainer to={'/ProductPrintTemplates'} Component={ProductPrintTemplates}>
                                        <NavItem>
                                            <Glyphicon glyph='education'/> Шаблоны ценников
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/RouteEditor'} Component={RouteEditor}>
                                        <NavItem>
                                            <Glyphicon glyph='education'/> Маршруты
                                        </NavItem>
                                    </LinkContainer>
                                </div>
                                : <p></p>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
