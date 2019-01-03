import React, {Component} from 'react';
import {Col, Grid, Row, DropdownButton, MenuItem, Button, Modal} from "react-bootstrap";
import {MovingBodyTable} from './MovingBodyTable';
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";
import 'bootstrap/dist/css/bootstrap.css';


export class MovingBody extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: this.props.match.params.mode, id: this.props.match.params.id,
            selectWarehouseIdFrom: [],
            selectWarehouseIdTo: [],
            data:[],
        };
        this.updateWarehouseIdFrom = this.updateWarehouseIdFrom.bind(this);
        this.updateWarehouseIdTo = this.updateWarehouseIdTo.bind(this);
        this.handleCloseModalLoadProducts = this.handleCloseModalLoadProducts.bind(this);
    }


    updateWarehouseIdFrom = (value) => {
        this.setState({selectWarehouseIdFrom: value});
        console.log("warehouseID: " + value);
    };
    updateWarehouseIdTo = (value) => {
        this.setState({selectWarehouseIdTo: value});
        console.log("warehouseID: " + value);
    };

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

    handleCloseModalLoadProducts() {
        this.setState({ showModalLoadProducts: false });
    }


    render() {
        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Акт перемещения продуктов </h1>


                <Row style={{height: '100px'}}>
                    <Col xs={6} md={4}>
                        <WarehouseDropDownList id='1' updateDate={this.updateWarehouseIdFrom}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <WarehouseDropDownList id='2' updateDate={this.updateWarehouseIdTo}/>
                    </Col>
                    <Col md={1} >
                        <DropdownButton title="Select Action" id="bg-vertical-dropdown-2">
                            <MenuItem eventKey="1">Accept</MenuItem>
                            <MenuItem eventKey="2">Revert</MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col md={1} >
                        <Button  bsStyle="primary" onClick={() => this.setState({ showModalLoadProducts: true })}>
                            Export data from txt
                        </Button>
                    </Col>
                </Row>
                <Row style={{height: '100%'}}>
                    <MovingBodyTable data={this.state.data}/>
                </Row>
            </Grid>

        );
    }
}