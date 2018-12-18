import React, {Component} from 'react';
import {InventoryDateDropDownList} from './InventoryDateDropDownList';
import {WarehouseDropDownList} from './WarehouseDropDownList';
import {InventoryHeadTable} from './InventoryHeadTable';
import {Grid, Row, Col} from 'react-bootstrap';

export class InventoryHead extends Component {
    displayName = InventoryHead.name

    constructor(props) {
        super(props);
        this.state = {
            selectInventoryId: 0,
            selectWarehouseId: [],
        };
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
    }

    updateInventoryDateId = (value) => {
        this.setState({selectInventoryId: value});
        console.log("selectInventoryId: " + this.state.selectInventoryId);
    };
    updateWarehouseId = (value) => {
        this.setState({selectWarehouseId: value});
        console.log("warehouseID: " + value);
    };

    render() {

        return (
            <Grid fluid style={{ height: '100%', overflow : 'auto'}}>
                <h1>Inventory</h1>
                <Row style={{ height: '100px'}}>
                    
                    <Col xs={6} md={4}>
                        <InventoryDateDropDownList updateData={this.updateInventoryDateId}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <WarehouseDropDownList updateDat={this.updateWarehouseId}/>
                    </Col>
                </Row>
                <Row style={{ height: '100%'}}>
                    <InventoryHeadTable/>
                </Row>
            </Grid>

        );
    }
}