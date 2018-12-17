import React, { Component } from 'react';
import { InventoryDateDropDownList } from './InventoryDateDropDownList';
import { WarehouseDropDownList } from './WarehouseDropDownList';
import { PlaceDropDownList } from './PlaceDropDownList';


export class InventoryHead extends Component {
    displayName = InventoryHead.name

    constructor(props) {
        super(props);
        this.state = {
            selectInventoryId: 0,
            selectWarehouseId: 0,
            selectPlaceId: 0,
        };
    }

    updateInventoryDateId = (value) => {
        this.setState({ selectInventoryId: value })
        console.log("selectInventoryId: "  +value);
    }
    updateWarehouseId = (value) => {
        this.setState({ selectWarehouseId: value })
        console.log("warehouseID: "  +value);
    }
     updatePlaceId = (value) => {
        this.setState({ selectPlaceId: value })
        console.log("PlaceID: "  +value);
    }
   
    render() {
       
        return (
            <div>
                <h1>Inventory</h1>
                <InventoryDateDropDownList updateData={this.updateInventoryDateId} />
                <WarehouseDropDownList updateData={this.updateWarehouseId} />
                <PlaceDropDownList WareHouseId={this.state.selectWarehouseId} updateData={this.updatePlaceId} />
             </div>
        );
    }
}