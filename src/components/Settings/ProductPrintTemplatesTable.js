import React, {Component} from 'react';
import {Button, Glyphicon, ButtonGroup, ButtonToolbar, Modal, Col} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-dropdown/style.css'

export class ProductPrintTemplatesTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataOptions: [],
            dataLoading: true,
            showModalDeleteHead: false,
            id: 0,
        };

        this.viewAct = this.viewAct.bind(this);
        this.editAct = this.editAct.bind(this);
        this.deleteAct = this.deleteAct.bind(this);
        this.handleCloseModalDeleteHead = this.handleCloseModalDeleteHead.bind(this);
        this.handleShowModalDeleteHead = this.handleShowModalDeleteHead.bind(this);
    }

    componentDidMount() {
        /*
         fetch('api/inventoryDate/')
             .then(response => response.json())
             .then(data => {
                 this.setState({ dateOptions: data, dateLoading: false });
             });
          */
        var data = [
                {Id: 1, Number: 1, Name: "Торты мал. 6х9", ProductGroupName: "Торты"},
                {Id: 2, Number: 2, Name: "Торты бол. 10х17", ProductGroupName: "Торты"},
                {Id: 3, Number: 3, Name: "Колбасы вес 6х9", ProductGroupName: "Колбасы"},
                {Id: 4, Number: 4, Name: "Крупы вес бол 22х30", ProductGroupName: "Крупы"},
                {Id: 5, Number: 5, Name: "Рыба вес мал 6х9", ProductGroupName: "Рыба"},
                {Id: 6, Number: 6, Name: "Разрубка охл 10х17", ProductGroupName: "Мясо"},
                {Id: 7, Number: 7, Name: "Грибы заморож мал 6х9", ProductGroupName: "Заморорзка"},
                {Id: 8, Number: 8, Name: "Овощи заморож. вес мал 6х9", ProductGroupName: "Заморорзка"},
                {Id: 9, Number: 9, Name: "Овощи заморож. вес бол 10х17", ProductGroupName: "Заморорзка"}
            ]
        ;
        this.setState({dataOptions: data, dataLoading: false});
    }

    addAct() {
        var win = window.open("/ProductPrintTemplateEditor/add", '_blank');
        win.focus();
    }

    viewAct(id) {
        var win = window.open("/ProductPrintTemplateEditor/view/" + id, '_blank');
        win.focus();
    }

    editAct(id) {
        var win = window.open("/ProductPrintTemplateEditor/edit/" + id, '_blank');
        win.focus();
    }

    deleteAct(id) {
        this.setState({showModalDeleteHead: true});
    }

    handleCloseModalDeleteHead() {
        this.setState({showModalDeleteHead: false});
    }

    handleShowModalDeleteHead() {
        this.setState({showModalDeleteHead: true});
    }

    buttonFormatter(cell, row) {
        return (<ButtonToolbar>
            <ButtonGroup>
                <Button onClick={() => this.viewAct(row.Id)}>
                    <Glyphicon glyph="search"/>
                </Button>
                <Button onClick={() => this.editAct(row.Id)}>
                    <Glyphicon glyph="pencil"/>
                </Button>
                <Button onClick={() => this.deleteAct(row.Id)}>
                    <Glyphicon glyph="trash"/>
                </Button>
            </ButtonGroup>
        </ButtonToolbar>);
    }

    render() {


        return (
            <div>
                <Modal show={this.state.showModalDeleteHead} onHide={this.handleCloseModalDeleteHead}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Are you sure?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseModalDeleteHead}>No</Button>
                        <Button className='btn btn-primary' onClick={this.handleCloseModalDeleteHead}>Sure</Button>
                    </Modal.Footer>
                </Modal>

                <div className="react-bs-table-tool-bar ">
                    <div className="row">

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8">

                            <div className="btn-group btn-group-sm" role="group" hidden={this.state.dataLoading}>
                                <button type="button" className="btn btn-info react-bs-table-add-btn ">
                                    <span>
                                        <i className="fa glyphicon glyphicon-plus fa-plus"> </i> 
                                        Добавить новый шаблон
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.dataLoading ?
                        <p><em>dd</em></p>
                        :
                        <Col md={10}>
                            <BootstrapTable data={this.state.dataOptions} striped hover fluid>
                                <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='Number' width='50'
                                                   dataAlign='center'>#</TableHeaderColumn>
                                <TableHeaderColumn dataField='Name' headerAlign='center'>Имя</TableHeaderColumn>
                                <TableHeaderColumn dataField='ProductGroupName' width='200' headerAlign='center'>Товарная
                                    группа</TableHeaderColumn>

                                <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)}
                                                   width='135'
                                                   dataAlign='center'>Действия</TableHeaderColumn>
                            </BootstrapTable>
                        </Col>
                }

            </div>
        )
            ;
    }
}