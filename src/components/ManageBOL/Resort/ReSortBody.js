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
            {Id: 2, RowNumber: 2, SourceEan: "4606203000081", SourceName: "СИГАРЕТЫ ЧЕСТЕРФИЛД БЛОК",TargetEan: "4606203000104", TargetName: "СИГАРЕТЫ ЧЕСТЕРФИЛД ЛАЙТ БЛОК", Count: 45},
            {Id: 3, RowNumber: 3, SourceEan: "4607025361060", SourceName: "КОЛБАСА ДИАБЕТ-ПИТ 400Г",TargetEan: "4607025361061", TargetName: "КОЛБАСА ДИАБЕТ-ПИТ МОЛ. 400Г", Count: 13},
            {Id: 4, RowNumber: 4, SourceEan: "4770100100271", SourceName: "ЧИПСЫ ЭСТРЕЛЛА УКРОП 90Г",TargetEan: "4770100100272", TargetName: "ЧИПСЫ ЭСТРЕЛЛА ПАПРИКА 90Г", Count: 54},
            {Id: 5, RowNumber: 5, SourceEan: "4770100100275", SourceName: "ЧИПСЫ ЭСТРЕЛЛА СЫР 90Г",TargetEan: "4770100100274", TargetName: "ЧИПСЫ ЭСТРЕЛЛА ВЕТЧИНА 90Г", Count: 24},
            {Id: 6, RowNumber: 6, SourceEan: "4603889001395", SourceName: "СОК МОЯ СЕМЬЯ ЗЕЛЕН ЯБЛОК 1Л",TargetEan: "4603889001392", TargetName: "СОК МОЯ СЕМЬЯ МУЛЬТИФРУКТ 1Л", Count: 12},
            {Id: 7, RowNumber: 7, SourceEan: "4607005400567", SourceName: "ШОКОЛАД ДЕСЕРТ ОРЕХ ИЗЮМ 250Г",TargetEan: "4607005400568", TargetName: "ШОКОЛАД ДЕСЕРТ ФУНДУК 250Г", Count: 45},
            {Id: 8, RowNumber: 8, SourceEan: "4607005400567", SourceName: "ШОКОЛАД ДЕСЕРТ ОРЕХ ИЗЮМ 250Г",TargetEan: "4607005400569", TargetName: "ШОКОЛАД ДЕСЕРТ МОЛОЧНЫЙ 250Г", Count: 2}];
        this.setState({data: tempdata});
    }

    render() {
        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Акт пересорта </h1>
                <p></p>
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