import React, {Component} from 'react';
import {Col, Grid, Row, DropdownButton, MenuItem, Button, Modal} from "react-bootstrap";
import {InventoryBodyTable} from './InventoryBodyTable';
import {InventoryDateDropDownList} from "./InventoryDateDropDownList";
import {WarehouseDropDownList} from "./WarehouseDropDownList";
import 'bootstrap/dist/css/bootstrap.css';


export class InventoryBody extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: this.props.match.params.mode, id: this.props.match.params.id,
            selectInventoryId: 0,
            selectWarehouseId: [],
            data:[],
            showModalLoadProducts: false
        };
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
        this.handleCloseModalLoadProducts = this.handleCloseModalLoadProducts.bind(this);
    }


    updateInventoryDateId = (value) => {
        this.setState({selectInventoryId: value});
        console.log("selectInventoryId: " + this.state.selectInventoryId);
    };
    updateWarehouseId = (value) => {
        this.setState({selectWarehouseId: value});
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
                <h1>Акт инвентаризации </h1>

                <Modal show={this.state.showModalLoadProducts} onHide={this.handleCloseModalLoadProducts}>
                    <Modal.Header closeButton>
                        <Modal.Title>Загрузить данные со сканера</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="file"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseModalLoadProducts}>Отмена</Button>
                        <Button className='btn btn-primary' onClick={this.handleCloseModalLoadProducts}>Загрузить</Button>
                    </Modal.Footer>
                </Modal>
                
                <Row style={{height: '100px'}}>

                    <Col md={3}>
                        <InventoryDateDropDownList updateData={this.updateInventoryDateId}/>
                    </Col>
                    <Col md={3}>
                        <WarehouseDropDownList updateDat={this.updateWarehouseId}/>
                    </Col>
                    <Col md={2} >
                        <DropdownButton title="Выбрать действие" id="bg-vertical-dropdown-2">
                            <MenuItem eventKey="1">Подтвердить</MenuItem>
                            <MenuItem eventKey="2">Отклонить</MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col md={1} >
                        <Button  bsStyle="primary" onClick={() => this.setState({ showModalLoadProducts: true })}>
                            Загрузить данные со сканера
                        </Button>
                    </Col>
                </Row>
                <Row style={{height: '100%'}}>
                    <InventoryBodyTable data={this.state.data}/>
                </Row>
            </Grid>

        );
    }
}