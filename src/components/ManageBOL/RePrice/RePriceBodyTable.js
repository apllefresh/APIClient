import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button, ButtonGroup, ButtonToolbar, Col, Glyphicon, Grid, Modal, Row} from "react-bootstrap";
import {InsertProductRePriceModal} from "./InsertProductRePriceModal";

export class RePriceBodyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalDeleteProduct: false,
            id: 0
        };

        this.handleCloseModalDeleteProduct = this.handleCloseModalDeleteProduct.bind(this);
    }

    createCustomModal = (onModalClose, onSave, columns) => {
        const attr = {
            onModalClose, onSave, columns
        };
        return (
            <InsertProductRePriceModal  {...attr} />
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
                        <BootstrapTable data={this.props.data} options={options} renderAlert={false} insertRow

                        >
                            <TableHeaderColumn dataField='Id' hidden></TableHeaderColumn>
                            <TableHeaderColumn dataField='RowNumber' width='50' headerAlign='center'
                                               dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='Ean' width='250' isKey={true} headerAlign='center'
                                               dataAlign='center'>Штрихкод</TableHeaderColumn>
                            <TableHeaderColumn dataField='Name' headerAlign='center'>Наименование</TableHeaderColumn>

                            <TableHeaderColumn dataField='SourcePrice' width='150' headerAlign='center'
                                               dataAlign='center'>Исходная цена</TableHeaderColumn>
                            <TableHeaderColumn dataField='TargetPrice' width='150' headerAlign='center'
                                               dataAlign='center'>Результирующая цена</TableHeaderColumn>
                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)}
                                               width='100' dataAlign='center'>Действия</TableHeaderColumn>
                        </BootstrapTable>
                    </Col>
                </Row>
            </Grid>
        );
    }
}