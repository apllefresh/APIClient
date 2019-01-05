import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {ProductHeadTable} from "./ProductHeadTable";
import {ProductGroupsDropDownList} from "./ProductGroupsDropDownList";
import {WarehouseDropDownList} from "../Inventory/WarehouseDropDownList";

export class ProductHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectWarehouseId: [],
            selectProductGroupId: [],
        };
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
        this.updateProductGroupId = this.updateProductGroupId.bind(this);
    }

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
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Товары</h1>
                <Row style={{height: '100%', padding: '10px 10px 10px 10px'}}>

                    <Col xs={6} md={4}>
                        <WarehouseDropDownList updateDate={this.updateWarehouseId}/>
                    </Col>
                    <Col md={2}>
                        <ProductGroupsDropDownList updateDat={this.updateProductGroupId}/>
                    </Col>
                </Row>
                <Row style={{height: '100%'}}>
                    <ProductHeadTable/>
                </Row>
            </Grid>

        );
    }
}