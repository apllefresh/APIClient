import React, { Component } from 'react';
import { WarehouseDropDownList } from './WarehouseDropDownList';
import { PlaceDropDownList } from './PlaceDropDownList';


export class InventoryHead extends Component {
    displayName = InventoryHead.name

    constructor(props) {
        super(props);
        this.state = {
            selectWarehouseId: 0,
            selectPlaceId: 0,
        };
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
                <WarehouseDropDownList updateData={this.updateWarehouseId} />
                <PlaceDropDownList WareHouseId={this.state.selectWarehouseId} updateData={this.updatePlaceId} />
             </div>
        );
    }
}