import React, {Component} from 'react';
import {
    Col,
    Grid,
    Row,
    DropdownButton,
    MenuItem,
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
                Name: "Shipper 1",
                INN: '1231233',
                KPP: '153864135354'
            },
            {
                Id: 2,
                RowNumber: 2,
                Name: "Shipper 2",
                INN: '1231233',
                KPP: '153864135354'
            },
            {
                Id: 3,
                RowNumber: 3,
                Name: "Shipper 3",
                INN: '1231233',
                KPP: '153864135354'
            },
            {
                Id: 4,
                RowNumber: 4,
                Name: "Shipper 4",
                INN: '1231233',
                KPP: '153864135354'
            },
            {
                Id: 5,
                RowNumber: 5,
                Name: "Shipper 5",
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
                        <Modal.Title>Delete Product from act</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Delete product "Product 1" from act. Are you sure?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseModalDeleteProduct}>No</Button>
                        <Button className='btn btn-primary' onClick={this.handleCloseModalDeleteProduct}>Sure</Button>
                    </Modal.Footer>
                </Modal>

                <Row>
                    <Col md={12}>
                        <Button className="pull-right" bsStyle="success">
                            Save Changes
                        </Button>
                        <BootstrapTable data={this.state.data} options={options} renderAlert={false} insertRow >
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