import React, {Component} from 'react';
import {Col, Grid, Row, DropdownButton, MenuItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {ReSortBodyTable} from "./ReSortBodyTable";
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";


export class ReSortBody extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: this.props.match.params.mode, id: this.props.match.params.id,
            selectWarehouseId: [],
            data: [],
        };
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
    }

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
            {Id: 1, RowNumber: 1, SourceEan: "4606160000476", SourceName: "СЫРОК ГЛАЗИР ЗЕБРА С КАРАМ 50Г",TargetEan: "4606160000483", TargetName: "СЫРОК ГЛАЗИР ЗЕБРА ШОКОЛ БЕЛ ГЛ 28.8% 50Г ", Count: 10},
            {Id: 2, RowNumber: 2, SourceEan: "4601231352452", SourceName: "Product 2",TargetEan: "4601231351354", TargetName: "Product 1", Count: 10},
            {Id: 3, RowNumber: 3, SourceEan: "4601231354865", SourceName: "Product 3",TargetEan: "4601231352135", TargetName: "Product 1", Count: 10},
            {Id: 4, RowNumber: 4, SourceEan: "4601231332829", SourceName: "Product 1",TargetEan: "4601231354663", TargetName: "Product 1", Count: 10},
            {Id: 5, RowNumber: 5, SourceEan: "4601231354556", SourceName: "Product 1",TargetEan: "4601231351313", TargetName: "Product 1", Count: 10},
            {Id: 6, RowNumber: 6, SourceEan: "4601231352845", SourceName: "Product 1",TargetEan: "4601231354561", TargetName: "Product 1", Count: 10},
            {Id: 7, RowNumber: 7, SourceEan: "4601231353423", SourceName: "Product 1",TargetEan: "4601231348633", TargetName: "Product 1", Count: 10},
            {Id: 8, RowNumber: 8, SourceEan: "4601231352756", SourceName: "Product 1",TargetEan: "4601231357863", TargetName: "Product 1", Count: 10}];
        this.setState({data: tempdata});
    }

    render() {
        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Акт пересорта </h1>

                <Row style={{height: '100px', width: '100%'}}>
                    <Col md={4}>
                        <WarehouseDropDownList updateDat={this.updateWarehouseId}/>
                    </Col>
                    <Col className="pull-right">
                        <DropdownButton title="Выбрать действие" id="bg-vertical-dropdown-2">
                            <MenuItem eventKey="1">Подтвердить</MenuItem>
                            <MenuItem eventKey="2">Отклонить</MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row style={{height: '100%',  width: '100%'}}>
                    <ReSortBodyTable data={this.state.data}/>
                </Row>
            </Grid>

        );
    }
}