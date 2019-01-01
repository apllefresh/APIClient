import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Layout';
import {InventoryHead} from './components/Inventory/InventoryHead';
import {InventoryAct} from './components/Inventory/InventoryAct';
import {Warehouses} from './components/Inventory/Warehouses';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
      	 <Route exact path='/' component={InventoryHead} />
         <Route path='/inventory' component={InventoryHead} />
          <Route path='/inventoryAct' component={InventoryAct} />
          <Route path='/warehouses' component={Warehouses} />
            
      </Layout>
    );
  }
}