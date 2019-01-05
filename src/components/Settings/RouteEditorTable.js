import React, {Component} from 'react';
import {Button, Glyphicon, ButtonGroup, ButtonToolbar,FormControl, Modal, ControlLabel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Select from 'react-select'
import 'react-dropdown/style.css'

export class RouteEditorTable extends Component {
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
            {Id: 1, Number: 1, Node1: "Начальная точка", Status: "Черновик", Node2: "Менеджер"},
            {Id: 1, Number: 2, Node1: "Менеджер", Status: "На рассмотрении у руководителя", Node2: "Руководитель"},
            {Id: 1, Number: 3, Node1: "Руководитель", Status: "Подтвержден руководителем", Node2: "Ком. директор"},
            {Id: 1, Number: 4, Node1: "Ком. директор", Status: "Подтвержден", Node2: "Конечня точка"},
            {Id: 1, Number: 5, Node1: "Руководитель", Status: "Возвращен менеджеру", Node2: "Менеджер"},
            {Id: 1, Number: 6, Node1: "Ком. директор", Status: "Возвращен руководителю", Node2: "Руководитель"}
        ];
        this.setState({dataOptions: data, dataLoading: false});
    }

    addAct() {
        var win = window.open("/ProductBody/add", '_blank');
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

    buttonFormatter(cell, row) {
        return (<ButtonToolbar>
            <ButtonGroup>
                <Button onClick={() => this.deleteAct(row.Id)}>
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

               
            
                {
                    this.state.dataLoading ?
                        <p><em>dd</em></p>
                        : <BootstrapTable data={this.state.dataOptions} striped hover fluid insertRow>
                            <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='Number' width='50' dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='Node1'>От кого</TableHeaderColumn>
                            <TableHeaderColumn dataField='Status'>Статус</TableHeaderColumn>
                            <TableHeaderColumn dataField='Node2'>Кому</TableHeaderColumn>

                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} width='100'
                                               dataAlign='center'>Buttons</TableHeaderColumn>
                        </BootstrapTable>
                }

            </div>
        )
            ;
    }
}