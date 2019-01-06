import React, {Component} from 'react';
import {Col, Grid, Row, DropdownButton, MenuItem, Button} from "react-bootstrap";
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";
import 'bootstrap/dist/css/bootstrap.css';
import {AnnulmentBodyTable} from "./AnnulmentBodyTable";


export class AnnulmentBody extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: this.props.match.params.mode, id: this.props.match.params.id,
            selectWarehouseIdFrom: [],
            selectWarehouseIdTo: [],
            data: [],
        };
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
        this.handleCloseModalLoadProducts = this.handleCloseModalLoadProducts.bind(this);
    }


    updateWarehouseId = (value) => {
        this.setState({selectWarehouseIdFrom: value});
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
        this.setState({data: tempdata});
    }

    handleCloseModalLoadProducts() {
        this.setState({showModalLoadProducts: false});
    }


    render() {
        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Акт списания продуктов </h1>
                <p></p>

                <Row style={{height: '100px'}}>
                    <Col md={6}>
                        <WarehouseDropDownList updateDate={this.updateWarehouseId}/>
                    </Col>
                    <Col md={2}>
                        <Button bsStyle="primary pull-right" onClick={() => this.setState({showModalLoadProducts: true})}>
                            Загрузить данные со сканера
                        </Button>
                    </Col>
                    <Col md={2}>
                        <DropdownButton title="Выбрать действие" id="bg-vertical-dropdown-2">
                            <MenuItem eventKey="1">Подтвердить</MenuItem>
                            <MenuItem eventKey="2">Отклонить</MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row style={{height: '100%'}}>
                    <AnnulmentBodyTable data={this.state.data}/>
                </Row>
            </Grid>

        );
    }
}