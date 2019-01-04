import React, {Component} from 'react';
import {WarehouseDropDownList} from './WarehouseDropDownList';
import {ProductGroupsDropDownList} from "../Product/ProductGroupsDropDownList";
import {RemainsTable} from "./RemainsTable";
import {Grid, Row, Col} from 'react-bootstrap';

export class Remains extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectWarehouseId: [],
            data: [],
        };
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
        this.updateProductGroupId = this.updateProductGroupId.bind(this);
    }

    componentDidMount() {
        /*
         fetch('api/inventoryDate/')
             .then(response => response.json())
             .then(data => {
                 this.setState({ dateOptions: data, dateLoading: false });
             });
          */
        var tempdata = [
            {Id: 1,RowNumber:1,Ean:"4601231352829", Name : "Product 1",Count:10 },
            {Id: 2,RowNumber:2,Ean:"4602204068413", Name : "Product 2",Count:10 },
            {Id: 3,RowNumber:3,Ean:"4607654034893", Name : "Product 3",Count:10 },
            {Id: 4,RowNumber:4,Ean:"4601231154658", Name : "Product 4",Count:10 },
            {Id: 5,RowNumber:5,Ean:"4601231248063", Name : "Product 5",Count:10 },
            {Id: 6,RowNumber:6,Ean:"4601235640463", Name : "Product 6",Count:10 },
            {Id: 7,RowNumber:7,Ean:"4601234168404", Name : "Product 7",Count:10 },
            {Id: 8,RowNumber:8,Ean:"4601232224505", Name : "Product 8",Count:10 }];
        this.setState({ data: tempdata});
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
        this.setState({selectWarehouseId: value});
        console.log("warehouseID: " + value);
    };

    render() {

        return (
            <Grid fluid style={{ height: '100%', overflow : 'auto'}}>
                <h1>Remains</h1>
                <Row style={{ height: '100px'}}>

                    <Col xs={6} md={4}>
                        <WarehouseDropDownList updateDate={this.updateWarehouseId}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <ProductGroupsDropDownList updateDate={this.updateProductGroupId}/>
                    </Col>
                </Row>
                <Row style={{ height: '100%'}}>
                   <RemainsTable data={this.state.data} />
                </Row>
            </Grid>

        );
    }
}