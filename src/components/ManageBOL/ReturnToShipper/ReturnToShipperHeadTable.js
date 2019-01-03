import React, {Component} from 'react';
import {Button, Glyphicon, ButtonGroup, ButtonToolbar, Modal} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class ReturnToShipperHeadTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataOptions: [],
            dataLoading: true,
            showModalDeleteHead: false,
            id: 0
        };

        ReturnToShipperHeadTable.viewAct = ReturnToShipperHeadTable.viewAct.bind(this);
        ReturnToShipperHeadTable.editAct = ReturnToShipperHeadTable.editAct.bind(this);
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
            {Id: 1, Number: 1, Shipper: "Mr Brown", InventorySpaceName: "space 1", Sum: "1254.05", RequestId: 1},
            {Id: 2, Number: 2, Shipper: "Mr Grey", InventorySpaceName: "space 2", Sum: "1254.05", RequestId: 2},
            {Id: 3, Number: 3, Shipper: "Mr White", InventorySpaceName: "space 3", Sum: "1254.05", RequestId: 3},
            {Id: 4, Number: 4, Shipper: "Mr Black", InventorySpaceName: "space 4", Sum: "1254.05", RequestId: 4},
            // {Id: 5, Number: 5, Shipper: "Mr Green", InventorySpaceName: "space 5", Sum: "1254.05", RequestId: 5},
            // {Id: 6, Number: 6, Shipper: "Mr Grey", InventorySpaceName: "space 3", Sum: "1254.05", RequestId: 6},
            // {Id: 7, Number: 7, Shipper: "Mr Black", InventorySpaceName: "space 1", Sum: "1254.05", RequestId: 7},
            // {Id: 8, Number: 8, Shipper: "Mr White", InventorySpaceName: "space 3", Sum: "1254.05", RequestId: 8},
            // {Id: 9, Number: 9, Shipper: "Mr Black", InventorySpaceName: "space 4", Sum: "1254.05", RequestId: 9},
            {Id: 10, Number: 10, Shipper: "Mr Green", InventorySpaceName: "space 5", Sum: "1254.05", RequestId: 10},
            {Id: 11, Number: 11, Shipper: "Mr Grey", InventorySpaceName: "space 3", Sum: "1254.05", RequestId: 11}
        ];
        this.setState({dataOptions: data, dataLoading: false});
    }

    static addAct() {
        var win = window.open("/ReturnToShipperBody/add", '_blank');
        win.focus();
    }

    static viewAct(id) {
        var win = window.open("/ReturnToShipperBody/view/" + id, '_blank');
        win.focus();
    }

    static editAct(id) {
        var win = window.open("/ReturnToShipperBody/edit/" + id, '_blank');
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
                <Button onClick={() => ReturnToShipperHeadTable.viewAct(row.Id)}>
                    <Glyphicon glyph="search"/>
                </Button>
                <Button onClick={() => ReturnToShipperHeadTable.editAct(row.Id)}>
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
                        <Modal.Title>Delete Inventory Act</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Are you sure?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseModalDeleteHead}>No</Button>
                        <Button className='btn btn-primary' onClick={this.handleCloseModalDeleteHead}>Sure</Button>
                    </Modal.Footer>
                </Modal>


                <Button hidden={this.state.dataLoading} style={{padding: '10px 10px 10px 10px'}}>
                    Создать накладную
                </Button>
                {
                    this.state.dataLoading ?
                        <p><em>dd</em></p>
                        : <BootstrapTable data={this.state.dataOptions} striped hover fluid >
                            <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='Number' width='50' dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='Shipper'>Поставщик</TableHeaderColumn>
                            <TableHeaderColumn dataField='InventorySpaceName'
                                               width='50%'>Склад</TableHeaderColumn>
                            <TableHeaderColumn dataField='Sum'
                                               width='150px'>Сумма</TableHeaderColumn>
                            <TableHeaderColumn dataField='RequestId'
                                               width='150px'># Накладной</TableHeaderColumn>
                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} width='135'
                                               dataAlign='center'>Buttons</TableHeaderColumn>
                        </BootstrapTable>
                }

            </div>
        );
    }
}