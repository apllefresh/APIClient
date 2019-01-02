import React, {Component} from 'react';
import {InventoryDateDropDownList} from './InventoryDateDropDownList';
import {WarehouseDropDownList} from './WarehouseDropDownList';
import {InventoryResultTable} from './InventoryResultTable';
import {Grid, Row, Col} from 'react-bootstrap';
import {ProductGroupsDropDownList} from "../Product/ProductGroupsDropDownList";

export class InventoryResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectInventoryId: 0,
            selectWarehouseId: [],
            selectProductGroupId: [],
        };
        this.updateInventoryDateId = this.updateInventoryDateId.bind(this);
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
        this.updateProductGroupId = this.updateProductGroupId.bind(this);
    }

    updateInventoryDateId = (value) => {
        this.setState({selectInventoryId: value});
        console.log("selectInventoryId: " + this.state.selectInventoryId);
    };
    updateWarehouseId = (value) => {
        this.setState({selectWarehouseId: value});
        console.log("warehouseID: " + value);
    };
    updateProductGroupId = (value) => {
        this.setState({selectProductGroupId: value});
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
                    <Col xs={6} md={4}>
                        <ProductGroupsDropDownList updateDat={this.updateProductGroupId}/>
                    </Col>
                </Row>
                <Row style={{ height: '100%'}}>
                    <InventoryResultTable/>
                </Row>
            </Grid>

        );
    }
}