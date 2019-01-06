import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button, ButtonGroup, ButtonToolbar, Col, Glyphicon, Grid, Modal, Row} from "react-bootstrap";
import {InsertProductResortModal} from "./InsertProductResortModal";

export class ReSortBodyTable extends React.Component {
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
            <InsertProductResortModal  {...attr} />
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
                        <Modal.Title>Удаление продукта из акта</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Удалить продукт из акта?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseModalDeleteProduct}>Отмена</Button>
                        <Button className='btn btn-primary' onClick={this.handleCloseModalDeleteProduct}>Удалить</Button>
                    </Modal.Footer>
                </Modal>

                <Row>
                    <Col md={12}>
                        <Button className="pull-right" bsStyle="success">
                            Сохранить
                        </Button>
                        
                        <BootstrapTable data={this.props.data} options={options} renderAlert={false} insertRow >
                            <TableHeaderColumn dataField='Id'  hidden></TableHeaderColumn>
                            <TableHeaderColumn dataField='RowNumber' width='50' headerAlign='center'
                                               dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='SourceEan' width='250' isKey={true} headerAlign='center'
                                               dataAlign='center'>Исходный штрихкод</TableHeaderColumn>
                            <TableHeaderColumn dataField='SourceName' headerAlign='center'>Исходный
                                продукт</TableHeaderColumn>
                            <TableHeaderColumn dataField='TargetEan' width='250'  headerAlign='center'
                                               dataAlign='center'>Результирующий штрихкод</TableHeaderColumn>
                            <TableHeaderColumn dataField='TargetName' headerAlign='center'>Результирующий
                                продукт</TableHeaderColumn>
                            <TableHeaderColumn dataField='Count' width='100' headerAlign='center'
                                               dataAlign='center'>Количество</TableHeaderColumn>
                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)}
                                               width='100' dataAlign='center'>Действия</TableHeaderColumn>
                        </BootstrapTable>
                    </Col>
                </Row>
            </Grid>
        );
    }
}