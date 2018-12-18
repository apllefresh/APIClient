import React, {Component} from 'react';
import {Col, Grid, Row, DropdownButton, MenuItem} from "react-bootstrap";
import {InventoryBodyTable} from './InventoryBodyTable';
import {InventoryDateDropDownList} from "./InventoryDateDropDownList";
import {WarehouseDropDownList} from "./WarehouseDropDownList";
import 'bootstrap/dist/css/bootstrap.css';


export class InventoryAct extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: this.props.match.params.mode, id: this.props.match.params.id,
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
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Inventory act </h1>
                <Row style={{height: '100px'}}>

                    <Col xs={6} md={4}>
                        <InventoryDateDropDownList updateData={this.updateInventoryDateId}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <WarehouseDropDownList updateDat={this.updateWarehouseId}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row style={{height: '100%'}}>
                    <InventoryBodyTable/>
                </Row>
            </Grid>

        );
    }
}



