import React, {Component} from 'react';
import {
    Col,
    Grid,
    Row,
    Button,
    Modal,
    ButtonToolbar,
    ButtonGroup,
    Glyphicon
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {InsertShipperModal} from "./InsertShipperModal";


export class Shippers extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            showModalDeleteProduct: false,
            id: 0
        };
        this.handleCloseModalDeleteProduct = this.handleCloseModalDeleteProduct.bind(this);
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
            {
                Id: 1,
                RowNumber: 1,
                Name: "ООО \"ТК Люкс\"",
                INN: '7733177548  ',
                KPP: '780501001'
            },
            {
                Id: 2,
                RowNumber: 2,
                Name: "ООО \"ТД Аркона\"",
                INN: '7810645779  ',
                KPP: '781401001'
            },
            {
                Id: 3,
                RowNumber: 3,
                Name: "ООО \"СТРОЙСМАРТ\"",
                INN: '7825470419  ',
                KPP: '784001001'
            },
            {
                Id: 4,
                RowNumber: 4,
                Name: "ООО \"Данон Индустрия\"",
                INN: '5048005969  ',
                KPP: '531001001'
            },
            {
                Id: 5,
                RowNumber: 5,
                Name: "ООО \"Эйрлит\"",
                INN: '7733177410  ',
                KPP: '470501001'
            },
            {
                Id: 6,
                RowNumber: 6,
                Name: "ООО \"Дилайн\"",
                INN: '7813184212 ',
                KPP: '784201001'
            },
            {
                Id: 7,
                RowNumber: 7,
                Name: "ООО \"ПромТех\"",
                INN: '7814119801  ',
                KPP: '470501001'
            },
            {
                Id: 8,
                RowNumber: 8,
                Name: "ООО \"ГРУППА АЛЬЯНС\"",
                INN: '7705496528  ',
                KPP: '471901001'
            },
            {
                Id: 9,
                RowNumber: 9,
                Name: "ООО \"ОРБИТА\"",
                INN: '7838023062  ',
                KPP: '780201001'
            },
            {
                Id: 10,
                RowNumber: 10,
                Name: "ООО \"ТК Кристэл\"",
                INN: '7706290907  ',
                KPP: '603701001'
            },
            {
                Id: 5,
                RowNumber: 5,
                Name: "Shippe",
                INN: '1231233',
                KPP: '470201001'
            },
            {
                Id: 5,
                RowNumber: 5,
                Name: "Shippe",
                INN: '1231233',
                KPP: '153864135354'
            },
            {
                Id: 5,
                RowNumber: 5,
                Name: "Shippe",
                INN: '1231233',
                KPP: '153864135354'
            },
            {
                Id: 5,
                RowNumber: 5,
                Name: "Shippe",
                INN: '1231233',
                KPP: '153864135354'
            },
            {
                Id: 5,
                RowNumber: 5,
                Name: "Shippe",
                INN: '1231233',
                KPP: '153864135354'
            }


        ];
        this.setState({data: tempdata});
    }

    createCustomModal = (onModalClose, onSave, columns) => {
        const attr = {
            onModalClose, onSave, columns
        };
        return (
            <InsertShipperModal  {...attr} />
        );
    };

    buttonFormatter(cell, row) {
        return (<ButtonToolbar>
            <ButtonGroup>
                <Button onClick={this.createCustomModal}>
                    <Glyphicon glyph="pencil"/>
                </Button>
                <Button onClick={() => this.setState({showModalDeleteProduct: true})}>
                    <Glyphicon glyph="trash"/>
                </Button>
            </ButtonGroup>
        </ButtonToolbar>);
    }

    handleCloseModalDeleteProduct() {
        this.setState({showModalDeleteProduct: false});
    }

    render() {
        const options = {
            insertModal: this.createCustomModal
        };
        return (
            <Grid fluid>
                <h1> Поставщики </h1>
                <p></p>
                <Modal show={this.state.showModalDeleteProduct} onHide={this.handleCloseModalDeleteProduct}>
                    <Modal.Header closeButton>
                        <Modal.Title>Удаление поставщика</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Удалить поставщика?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseModalDeleteProduct}>Отмена</Button>
                        <Button className='btn btn-primary'
                                onClick={this.handleCloseModalDeleteProduct}>Удалить</Button>
                    </Modal.Footer>
                </Modal>

                <Row>
                    <Col md={10}>
                        <Button className="pull-right" bsStyle="success">
                            Сохранить
                        </Button>
                        
                            <BootstrapTable data={this.state.data} options={options} renderAlert={false} insertRow>
                                <TableHeaderColumn dataField='Id' hidden></TableHeaderColumn>
                                <TableHeaderColumn dataField='RowNumber' width='50' headerAlign='center'
                                                   dataAlign='center'>#</TableHeaderColumn>
                                <TableHeaderColumn dataField='Name' isKey headerAlign='center'>Имя</TableHeaderColumn>

                                <TableHeaderColumn dataField='INN' width='150' headerAlign='center'
                                                   dataAlign='center'>ИНН</TableHeaderColumn>
                                <TableHeaderColumn dataField='KPP' width='150' headerAlign='center'
                                                   dataAlign='center'>КПП</TableHeaderColumn>

                                <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)}
                                                   width='100' dataAlign='center'>Действия</TableHeaderColumn>
                            </BootstrapTable>
                        
                    </Col>
                </Row>
            </Grid>

        );
    }
}