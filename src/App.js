import React, {Component} from 'react';
import {Route} from 'react-router';


import {Layout} from './Layout';
import {InventoryHead} from './components/Inventory/InventoryHead';
import {InventoryBody} from './components/Inventory/InventoryBody';
import {Warehouses} from './components/Inventory/Warehouses';
import {Remains} from './components/Inventory/Remains';
import {InventoryDates} from "./components/Inventory/InventoryDates";
import {InventoryResult} from "./components/Inventory/InventoryResult";

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
import {AnnulmentBody} from "./components/ManageBOL/Annulment/AnnulmentBody";
import {AnnulmentHead} from "./components/ManageBOL/Annulment/AnnulmentHead";
import {ReturnToShipperHead} from "./components/ManageBOL/ReturnToShipper/ReturnToShipperHead";
import {ReturnToShipperBody} from "./components/ManageBOL/ReturnToShipper/ReturnToShipperBody";


import {registerLocale, setDefaultLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru'
import {ProductGroups} from "./components/Product/ProductGroups";
import {Shippers} from "./components/Product/Shippers";
import {ProductHead} from "./components/Product/ProductHead";
import {ProductBody} from "./components/Product/ProductBody";
import {ProductPrintTemplates} from "./components/Settings/ProductPrintTemplates";
import {ProductPrintTemplateEditor} from "./components/Settings/ProductPrintTemplateEditor";
import {RouteEditor} from "./components/Settings/RouteEditor";

import {UserList} from "./components/Administration/UserList";
import {User} from "./components/Administration/User";
import {Departments} from "./components/Administration/Departments";
import {RoleList} from "./components/Administration/RoleList";
import {Role} from "./components/Administration/Role";
import {RealizChart} from "./components/Realiz/RealizChart";

registerLocale('ru', ru);
setDefaultLocale('ru');


export default class App extends Component {
    displayName = App.name;

    render() {
        return (
            <Layout>
                {/*<Route exact path='./ /Login.html' />*/}
                <Route path='/InventoryHead' component={InventoryHead}/>
                <Route path='/InventoryBody' component={InventoryBody}/>
                <Route path='/Warehouses' component={Warehouses}/>
                <Route path='/Remains' component={Remains}/>
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

                <Route path='/ProductGroups' component={ProductGroups}/>
                <Route path='/Shippers' component={Shippers}/>
                <Route path='/ProductHead' component={ProductHead}/>
                <Route path='/ProductBody' component={ProductBody}/>

                <Route path='/RealizChart' component={RealizChart}/>

                <Route path='/ProductPrintTemplates' component={ProductPrintTemplates}/>
                <Route path='/ProductPrintTemplateEditor' component={ProductPrintTemplateEditor}/>
                <Route path='/RouteEditor' component={RouteEditor}/>

                <Route path='/UserList' component={UserList}/>
                <Route path='/User' component={User}/>
                <Route path='/Departments' component={Departments}/>
                <Route path='/RoleList' component={RoleList}/>
                <Route path='/Role' component={Role}/>

            </Layout>
        );
    }
}