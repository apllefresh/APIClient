import React, {Component} from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';
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
import {UserList} from "./components/Administration/UserList";
import {Departments} from "./components/Administration/Departments";
import {RoleList} from "./components/Administration/RoleList";
import {RealizChart} from "./components/Realiz/RealizChart";
import {Bills} from "./components/Realiz/Bills";

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
                        <NavItem onClick={() => this.setState({Show: (this.state.Show === 1 ? 0 : 1)})}>
                            Инвентаризация
                        </NavItem>
                        {
                            this.state.Show === 1 ?
                                <div style={{paddingLeft: '30px'}}>
                                    <LinkContainer to={'/InventoryHead'} Component={InventoryHead}>
                                        <NavItem>
                                            Акты инвентаризации
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/InventoryDates'} Component={InventoryDates}>
                                        <NavItem>
                                            Даты инвентаризации
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/warehouses'} Component={Warehouses}>
                                        <NavItem>
                                            Склады
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/remains'} Component={Remains}>
                                        <NavItem>
                                            Наличие товаров
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/InventoryResult'} Component={InventoryResult}>
                                        <NavItem>
                                            Результаты инвентаризации
                                        </NavItem>
                                    </LinkContainer>
                                </div>
                                : <p></p>
                        }
                        <NavItem onClick={() => this.setState({Show: (this.state.Show === 2 ? 0 : 2)})}>
                            Накладные
                        </NavItem>
                        {
                            this.state.Show === 2 ?
                                <div style={{paddingLeft: '30px'}}>
                                    <LinkContainer to={'/resortHead'} Component={ReSortHead}>
                                        <NavItem>
                                            Пересорт
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/rePriceHead'} Component={RePriceHead}>
                                        <NavItem>
                                            Переоценка
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/movingHead'} Component={MovingHead}>
                                        <NavItem>
                                            Перемещения
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/RequestHead'} Component={RequestHead}>
                                        <NavItem>
                                            Заявки
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/InvoiceHead'} Component={InvoiceHead}>
                                        <NavItem>
                                            Накладные
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/AnnulmentHead'} Component={AnnulmentHead}>
                                        <NavItem>
                                            Списание
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/ReturnToShipperHead'} Component={ReturnToShipperHead}>
                                        <NavItem>
                                            Возврат поставщику
                                        </NavItem>
                                    </LinkContainer>
                                </div>
                                : <p></p>
                        }

                        <NavItem onClick={() => this.setState({Show: (this.state.Show === 3 ? 0 : 3)})}>
                            Продукты
                        </NavItem>
                        {
                            this.state.Show === 3 ?
                                <div style={{paddingLeft: '30px'}}>
                                    <LinkContainer to={'/ProductGroups'} Component={ProductGroups}>
                                        <NavItem>
                                            Товарные группы
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/Shippers'} Component={Shippers}>
                                        <NavItem>
                                            Поставщики
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/ProductHead'} Component={ProductHead}>
                                        <NavItem>
                                            Товары
                                        </NavItem>
                                    </LinkContainer>
                                </div>
                                : <p></p>
                        }
                        <NavItem onClick={() => this.setState({Show: (this.state.Show === 4 ? 0 : 4)})}>
                            Реализация
                        </NavItem>
                        {
                            this.state.Show === 4 ?
                                <div style={{paddingLeft: '30px'}}>
                                    <LinkContainer to={'/RealizChart'} Component={RealizChart}>
                                        <NavItem>
                                            График реализации
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/Bills'} Component={Bills}>
                                        <NavItem>
                                            Чеки
                                        </NavItem>
                                    </LinkContainer>
                                </div>
                                : <p></p>
                        }
                        <NavItem onClick={() => this.setState({Show: (this.state.Show === 5 ? 0 : 5)})}>
                            Настройки
                        </NavItem>
                        {
                            this.state.Show === 5 ?
                                <div style={{paddingLeft: '30px'}}>
                                    <LinkContainer to={'/ProductPrintTemplates'} Component={ProductPrintTemplates}>
                                        <NavItem>
                                            Шаблоны ценников
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/RouteEditor'} Component={RouteEditor}>
                                        <NavItem>
                                            Маршруты
                                        </NavItem>
                                    </LinkContainer>
                                </div>
                                : <p></p>
                        }

                        <NavItem onClick={() => this.setState({Show: (this.state.Show === 6 ? 0 : 6)})}>
                            Администрирование
                        </NavItem>
                        {
                            this.state.Show === 6 ?
                                <div style={{paddingLeft: '30px'}}>
                                    <LinkContainer to={'/UserList'} Component={UserList}>
                                        <NavItem>
                                            Пользователи
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/RoleList'} Component={RoleList}>
                                        <NavItem>
                                            Роли
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/Departments'} Component={Departments}>
                                        <NavItem>
                                            Отделы
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
