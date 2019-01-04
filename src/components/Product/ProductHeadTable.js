import React, {Component} from 'react';
import {Button, Glyphicon, ButtonGroup, ButtonToolbar,FormControl, Modal, ControlLabel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Select from 'react-select'
import 'react-dropdown/style.css'

export class ProductHeadTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataOptions: [],
            dataLoading: true,
            showModalDeleteHead: false,
            showModalPrint: false,
            id: 0,
            options: [
                {
                    label: "Стандарт 3х4",
                    value: "1"
                },
                {
                    label: "Большой 17х20",
                    value: "2"
                }
            ],
        };

        this.viewAct = this.viewAct.bind(this);
        this.editAct = this.editAct.bind(this);
        this.deleteAct = this.deleteAct.bind(this);
        this.handleCloseModalDeleteHead = this.handleCloseModalDeleteHead.bind(this);
        this.handleShowModalDeleteHead = this.handleShowModalDeleteHead.bind(this);
        this.handleCloseModalPrint = this.handleCloseModalPrint.bind(this);
        this.handleShowModalPrint = this.handleShowModalPrint.bind(this);
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
            {Id: 1, Number: 1, EAN: "space 1", Name: "Mr Brown", ProductGroupName: "Рыба"},
            {Id: 2, Number: 2, EAN: "space 1", Name: "Mr Brown", ProductGroupName: "Мясо"},
            {Id: 3, Number: 3, EAN: "space 1", Name: "Mr Brown", ProductGroupName: "Рыба"},
            {Id: 4, Number: 4, EAN: "space 1", Name: "Mr Brown", ProductGroupName: "Мясо"},
            {Id: 5, Number: 5, EAN: "space 1", Name: "Mr Brown", ProductGroupName: "Рыба"},
            {Id: 6, Number: 6, EAN: "space 1", Name: "Mr Brown", ProductGroupName: "Мясо"},
            {Id: 7, Number: 7, EAN: "space 1", Name: "Mr Brown", ProductGroupName: "Рыба"},
            {Id: 8, Number: 8, EAN: "space 1", Name: "Mr Brown", ProductGroupName: "Мясо"},
            {Id: 9, Number: 9, EAN: "space 1", Name: "Mr Brown", ProductGroupName: "Рыба"}
        ];
        this.setState({dataOptions: data, dataLoading: false});
    }

    addAct() {
        var win = window.open("/ProductBody/add", '_blank');
        win.focus();
    }

    viewAct(id) {
        var win = window.open("/ProductBody/view/" + id, '_blank');
        win.focus();
    }

    editAct(id) {
        var win = window.open("/ProductBody/edit/" + id, '_blank');
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
    handleCloseModalPrint() {
        this.setState({showModalPrint: false});
    }

    handleShowModalPrint() {
        this.setState({showModalPrint: true});
    }

    buttonFormatter(cell, row) {
        return (<ButtonToolbar>
            <ButtonGroup>
                <Button onClick={this.handleShowModalPrint}>
                    <Glyphicon glyph="print"/>
                </Button>
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
                <Modal show={this.state.showModalPrint} onHide={this.handleCloseModalPrint}>
                    <Modal.Header closeButton>
                        <Modal.Title>Печать ценников</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ControlLabel>
                            Выберете шаблон ценника
                        </ControlLabel>
                        <Select placeholder="Шаблон ценника" options={this.state.options}  />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseModalPrint}>Отмена</Button>
                        <Button className='btn btn-primary' onClick={this.handleCloseModalPrint}>Печать</Button>
                    </Modal.Footer>
                </Modal>
                
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
                                        Добавить новый товар
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.dataLoading ?
                        <p><em>dd</em></p>
                        : <BootstrapTable data={this.state.dataOptions} striped hover fluid>
                            <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='Number' width='50' dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='EAN'>Штрихкод</TableHeaderColumn>
                            <TableHeaderColumn dataField='Name'>Наименование</TableHeaderColumn>
                            <TableHeaderColumn dataField='ProductGroupName'>Товарная группа</TableHeaderColumn>

                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} width='180'
                                               dataAlign='center'>Buttons</TableHeaderColumn>
                        </BootstrapTable>
                }

            </div>
        )
            ;
    }
}