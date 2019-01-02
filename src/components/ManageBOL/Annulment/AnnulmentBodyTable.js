import React, {Component} from 'react';
import {Button, Glyphicon, ButtonGroup, ButtonToolbar, Modal, Grid, Row, Col} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {InsertProductModal} from "../../Inventory/InsertProductModal";

export class AnnulmentBodyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalDeleteProduct: false,
            id:0
        };

        this.handleCloseModalDeleteProduct = this.handleCloseModalDeleteProduct.bind(this);
    }

    createCustomModal = (onModalClose, onSave, columns) => {
        const attr = {
            onModalClose, onSave, columns
        };
        return (
            <InsertProductModal  {...attr} />
        );
    };

    buttonFormatter(cell, row) {
        return (<ButtonToolbar>
            <ButtonGroup>
                <Button onClick={this.createCustomModal}>
                    <Glyphicon glyph="pencil" />
                </Button>
                <Button onClick={() => this.setState({ showModalDeleteProduct: true })}>
                    <Glyphicon glyph="trash" />
                </Button>
            </ButtonGroup>
        </ButtonToolbar>);
    }

    handleCloseModalDeleteProduct() {
        this.setState({ showModalDeleteProduct: false });
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
                    <Col md={10}>
                        <Button className="pull-right" bsStyle="success">
                            Save Changes
                        </Button>
                        <BootstrapTable  data={this.props.data} options={options} renderAlert={false} insertRow>
                            <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='RowNumber' width='50' dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='Ean' >Штрихкод</TableHeaderColumn>
                            <TableHeaderColumn dataField='Name' width='30%'>Наименование</TableHeaderColumn>
                            <TableHeaderColumn dataField='Count'>Количество</TableHeaderColumn>

                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} width='135'
                                               dataAlign='center'>Buttons</TableHeaderColumn>
                        </BootstrapTable>
                    </Col>
                </Row>
            </Grid>
        );
    }
}