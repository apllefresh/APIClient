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
            {Id: 1,RowNumber:1,Ean:"4601636301309", Name : "МАЙОНЕЗ ПРОВАНС 67% 850Г ВД ",Count:10 },
            {Id: 2,RowNumber:2,Ean:"4606160000476", Name : "СЫРОК ГЛАЗИР ЗЕБРА С КАРАМ 50Г ",Count:253 },
            {Id: 3,RowNumber:3,Ean:"4601870000402", Name : "КОТЛЕТЫ СНЕЖНАЯ СТРАНА КЛАССИЧЕСКИЕ 450Г ",Count:42 },
            {Id: 4,RowNumber:4,Ean:"4607025361060", Name : "КОЛБАСА ДИАБЕТ-ПИТ 400Г",Count:56 },
            {Id: 5,RowNumber:5,Ean:"4008429008535", Name : "НАПОЛНИТЕЛЬ КАТСАН ГИГИЕН 5Л",Count:45 },
            {Id: 6,RowNumber:6,Ean:"4770100100271", Name : "ЧИПСЫ ЭСТРЕЛЛА УКРОП 90Г",Count:124 },
            {Id: 7,RowNumber:7,Ean:"4607026600120", Name : "ПАСТА ТОМАТН НАЦИОН КУХНЯ 1000Г",Count:45 },
            {Id: 8,RowNumber:8,Ean:"4607037640047", Name : "ЧАЙ ТОТ САМЫЙ БАЙХОВЫЙ 1С 100Г ",Count:75 },
            {Id: 8,RowNumber:9,Ean:"4600809000018", Name : "МАСЛО КУКУРУЗНОЕ СОЛНЫШКО 0.75Л  ",Count:45 },
            {Id: 8,RowNumber:10,Ean:"4607005400567", Name : "ШОКОЛАД ДЕСЕРТ ОРЕХ ИЗЮМ 250Г",Count:456 },
            {Id: 8,RowNumber:11,Ean:"4606203000241", Name : "СИГАРЕТЫ Л&М БЛОК",Count:54 },
            {Id: 8,RowNumber:12,Ean:"4607007640206", Name : "РЯЖЕНКА 4% 0.5Л МОЛОКОЛАМСК",Count: 87},
            {Id: 8,RowNumber:13,Ean:"4605246003158", Name : "ЧАЙ ПРИНЦЕССА НУРИ БЕСТ 250Г",Count:745 },
            {Id: 8,RowNumber:14,Ean:"4607026981748", Name : "КОЛБАСА ДИАБЕТИЧЕСКАЯ 400Г КРОНШТАДТ",Count:56 },
            {Id: 8,RowNumber:15,Ean:"4607036040275", Name : "КЕТЧУП БАЛТИМОР ОСТРЫЙ 900Г",Count:32 }
            
            ];
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
                <h1>Наличие товаров</h1>
                <p></p>
                <Row style={{ height: '100px'}}>

                    <Col  md={4}>
                        <WarehouseDropDownList updateDate={this.updateWarehouseId}/>
                    </Col>
                    <Col md={4}>
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