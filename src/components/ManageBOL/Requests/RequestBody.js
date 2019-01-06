import React, {Component} from 'react';
import {Col, Grid, Row, DropdownButton, MenuItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {RequestBodyTable} from "./RequestBodyTable";
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";
import {ShipperDropDownList} from "../../Product/ShipperDropDownList";


export class RequestBody extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: this.props.match.params.mode, id: this.props.match.params.id,
            selectWarehouseId: [],
            data: [],
            selectShipperId: [],
        };
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
        this.updateShipperId = this.updateShipperId.bind(this);
    }

    updateWarehouseId = (value) => {
        this.setState({selectWarehouseId: value});
        console.log("warehouseID: " + value);
    };
    updateShipperId = (value) => {
        this.setState({selectShipperId: value});
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
            {
                Id: 1,
                RowNumber: 1,
                Ean: "4601636301309",
                Name: "МАЙОНЕЗ ПРОВАНС 67% 850Г ВД ",
                SalePrice: "89.00",
                BuyPrice: "99.00",
                Count: 10
            },
            {
                Id: 2,
                RowNumber: 2,
                Ean: "4601870000402",
                Name: "КОТЛЕТЫ СНЕЖНАЯ СТРАНА КЛАССИЧЕСКИЕ 450Г ",
                SalePrice: "119.00",
                BuyPrice: "109.00",
                Count: 10
            },
            {
                Id: 3,
                RowNumber: 3,
                Ean: "4607025361060",
                Name: "КОЛБАСА ДИАБЕТ-ПИТ 400Г",
                SalePrice: "229.00",
                BuyPrice: "159.00",
                Count: 10
            },
            {
                Id: 4,
                RowNumber: 4,
                Ean: "4607026600120",
                Name: "ПАСТА ТОМАТН НАЦИОН КУХНЯ 1000Г",
                SalePrice: "169.00",
                BuyPrice: "179.00",
                Count: 10
            },
            {
                Id: 5,
                RowNumber: 5,
                Ean: "4606160000476",
                Name: "СЫРОК ГЛАЗИР ЗЕБРА С КАРАМ 50Г ",
                SalePrice: "19.00", 
                BuyPrice: "9.00", 
                Count: 10},
            {
                Id: 6,
                RowNumber: 6,
                Ean: "4008429008535",
                Name: "НАПОЛНИТЕЛЬ КАТСАН ГИГИЕН 5Л",
                SalePrice: "1059.00",
                BuyPrice: "1359.00",
                Count: 10
            },
            {
                Id: 7,
                RowNumber: 7,
                Ean: "4607005400567",
                Name: "ШОКОЛАД ДЕСЕРТ ОРЕХ ИЗЮМ 250Г",
                SalePrice: "359.00",
                BuyPrice: "309.00",
                Count: 10
            },
            {
                Id: 8,
                RowNumber: 8,
                Ean: "4770100100271",
                Name: "ЧИПСЫ ЭСТРЕЛЛА УКРОП 90Г",
                SalePrice: "129.00",
                BuyPrice: "99.00",
                Count: 10
            }
        ];
        this.setState({data: tempdata});
    }

    render() {
        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Заявка №124 </h1>
                <p></p>
                <Row style={{height: '100px', width: '100%'}}>
                    <Col md={4}>
                        <WarehouseDropDownList updateDat={this.updateWarehouseId}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <ShipperDropDownList updateDate={this.updateShipperId}/>
                    </Col>
                    <Col className="pull-right">
                        <DropdownButton title="Выбрать действие" id="bg-vertical-dropdown-2">
                            <MenuItem eventKey="1">Подтвердить</MenuItem>
                            <MenuItem eventKey="2">Отклонить</MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row style={{height: '100%', width: '100%'}}>
                    <RequestBodyTable data={this.state.data}/>
                </Row>
            </Grid>

        );
    }
}