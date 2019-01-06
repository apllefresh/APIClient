import React, {Component} from 'react';
import {
    Col,
    Grid,
    Row,
    DropdownButton,
    MenuItem,
    Button,
    Modal,
    ControlLabel,
    FormGroup,
    FormControl
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";
import {ShipperDropDownList} from "../../Product/ShipperDropDownList";
import {InvoiceBodyTable} from "./InvoiceBodyTable";


export class InvoiceBody extends Component {
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
                Name: "МАЙОНЕЗ ПРОВАНС 67% 850Г ВД",
                SalePrice: "89.00",
                BuyPrice: "99.00",
                RequestCount: 10,
                InvoiceCount: 10
            },
            {
                Id: 2,
                RowNumber: 2,
                Ean: "4601870000402",
                Name: "КОТЛЕТЫ СНЕЖНАЯ СТРАНА КЛАССИЧЕСКИЕ 450Г",
                SalePrice: "119.00",
                BuyPrice: "109.00",
                RequestCount: 10,
                InvoiceCount: 10
            },
            {
                Id: 3,
                RowNumber: 3,
                Ean: "4607025361060",
                Name: "КОЛБАСА ДИАБЕТ-ПИТ 400Г ",
                SalePrice: "229.00",
                BuyPrice: "159.00",
                RequestCount: 10,
                InvoiceCount: 10
            },
            {
                Id: 4,
                RowNumber: 4,
                Ean: "4607025361077",
                Name: "КОЛБАСА ПИТ-МОЛ В/С 400Г ПИТ-ПРОДУКТ ",
                SalePrice: "169.00",
                BuyPrice: "179.00",
                RequestCount: 10,
                InvoiceCount: 10
            },
            {
                Id: 5,
                RowNumber: 5,
                Ean: "4606160000483",
                Name: "СЫРОК ГЛАЗИР ЗЕБРА ШОКОЛ БЕЛ ГЛ 28.8% 50Г",
                SalePrice: "19.00",
                BuyPrice: "9.00",
                RequestCount: 10,
                InvoiceCount: 10
            },
            {
                Id: 6,
                RowNumber: 6,
                Ean: "9001466237130",
                Name: "НАПОЛНИТЕЛЬ ДАРЛИНГ Д/КОШ ТУАЛЕТА 5КГ",
                SalePrice: "1059.00",
                BuyPrice: "1359.00",
                RequestCount: 10,
                InvoiceCount: 10
            },
            {
                Id: 7,
                RowNumber: 7,
                Ean: "4606471199012",
                Name: "МЕД НАТУР 380Г ПРОМТОРГ ",
                SalePrice: "359.00",
                BuyPrice: "309.00",
                RequestCount: 10,
                InvoiceCount: 10
            },
            {
                Id: 8,
                RowNumber: 8,
                Ean: "4607007640206",
                Name: "РЯЖЕНКА 4% 0.5Л МОЛОКОЛАМСК",
                SalePrice: "129.00",
                BuyPrice: "99.00",
                RequestCount: 10,
                InvoiceCount: 10
            }
        ];
        this.setState({data: tempdata});
    }

    render() {
        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Накладная </h1>

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

                <Row style={{height: '100px', width: '100%'}}>
                    <Col md={2}>
                        <FormGroup>
                            <ControlLabel>
                                Номер заявки
                            </ControlLabel>
                            <FormControl
                                type="text"
                                placeholder=""
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <WarehouseDropDownList updateDat={this.updateWarehouseId}/>
                    </Col>
                    <Col md={3}>
                        <ShipperDropDownList updateDate={this.updateShipperId}/>
                    </Col>
                    <Col md={2}>
                        <Button bsStyle="primary" onClick={() => this.setState({showModalLoadProducts: true})}>
                            Загрузить данные со сканера
                        </Button>
                    </Col>
                    <Col className="pull-right">
                        <DropdownButton title="Выбрать действие" id="bg-vertical-dropdown-2">
                            <MenuItem eventKey="1">Подтвердить</MenuItem>
                            <MenuItem eventKey="2">Отклонить</MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row style={{height: '100%', width: '100%'}}>
                    <InvoiceBodyTable data={this.state.data}/>
                </Row>
            </Grid>

        );
    }
}