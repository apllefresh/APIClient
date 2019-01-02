import React, {Component} from 'react';
import {Route} from 'react-router';
import {Layout} from './Layout';
import {InventoryHead} from './components/Inventory/InventoryHead';
import {InventoryBody} from './components/Inventory/InventoryBody';
import {Warehouses} from './components/Inventory/Warehouses';
import {Remains} from './components/Inventory/Remains';
import {ReSortHead} from "./components/ManageBOL/Resort/ReSortHead";
import {ReSortBody} from "./components/ManageBOL/Resort/ReSortBody";
import {RePriceHead} from "./components/ManageBOL/RePrice/RePriceHead";
import {RePriceBody} from "./components/ManageBOL/RePrice/RePriceBody";
import {MovingHead} from "./components/ManageBOL/Moving/MovingHead";
import {MovingBody} from "./components/ManageBOL/Moving/MovingBody";
import {RequestHead} from "./components/ManageBOL/Requests/RequestHead";
import {RequestBody} from "./components/ManageBOL/Requests/RequestBody";
import {InvoiceHead} from "./components/ManageBOL/Invoices/InvoiceHead";
import {InvoiceBody} from "./components/ManageBOL/Invoices/InvoiceBody";
import {InventoryDates} from "./components/Inventory/InventoryDates";
import {InventoryResult} from "./components/Inventory/InventoryResult";
import {AnnulmentBody} from "./components/ManageBOL/Annulment/AnnulmentBody";
import {AnnulmentHead} from "./components/ManageBOL/Annulment/AnnulmentHead";
import {ReturnToShipperHead} from "./components/ManageBOL/ReturnToShipper/ReturnToShipperHead";
import {ReturnToShipperBody} from "./components/ManageBOL/ReturnToShipper/ReturnToShipperBody";

export default class App extends Component {
    displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={InventoryHead}/>
                <Route path='/inventory' component={InventoryHead}/>
                <Route path='/inventoryAct' component={InventoryBody}/>
                <Route path='/warehouses' component={Warehouses}/>
                <Route path='/remains' component={Remains}/>
                <Route path='/InventoryDates' component={InventoryDates}/>
                <Route path='/InventoryResult' component={InventoryResult}/>

                <Route path='/resortHead' component={ReSortHead}/>
                <Route path='/resortBody' component={ReSortBody}/>
                <Route path='/rePriceHead' component={RePriceHead}/>
                <Route path='/rePriceBody' component={RePriceBody}/>
                <Route path='/MovingHead' component={MovingHead}/>
                <Route path='/MovingBody' component={MovingBody}/>
                <Route path='/RequestHead' component={RequestHead}/>
                <Route path='/RequestBody' component={RequestBody}/>
                <Route path='/InvoiceHead' component={InvoiceHead}/>
                <Route path='/InvoiceBody' component={InvoiceBody}/>
                <Route path='/AnnulmentHead' component={AnnulmentHead}/>
                <Route path='/AnnulmentBody' component={AnnulmentBody}/>
                <Route path='/ReturnToShipperHead' component={ReturnToShipperHead}/>
                <Route path='/ReturnToShipperBody' component={ReturnToShipperBody}/>
                
            </Layout>
        );
    }
}