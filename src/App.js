import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Layout';
import {InventoryHead} from './components/Inventory/InventoryHead';
import {InventoryAct} from './components/Inventory/InventoryAct';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
      	 <Route exact path='/' component={InventoryHead} />
         <Route path='/inventory' component={InventoryHead} />
          <Route path='/inventoryAct' component={InventoryAct} />
            
      </Layout>
    );
  }
}