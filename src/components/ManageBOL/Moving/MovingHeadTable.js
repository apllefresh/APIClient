import React, {Component} from 'react';
import {Button, Glyphicon, ButtonGroup, ButtonToolbar, Modal} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class MovingHeadTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataOptions: [],
            dataLoading: true,
            showModalDeleteHead: false,
            id: 0
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
            {Id: 1, Number: 1, InventorySpaceNameFrom: "space 1", InventorySpaceNameTo: "space 1", CreatedBy: "Mr Brown"},
            {Id: 2, Number: 2, InventorySpaceNameFrom: "space 2", InventorySpaceNameTo: "space 1", CreatedBy: "Mr Grey"},
            {Id: 3, Number: 3, InventorySpaceNameFrom: "space 3", InventorySpaceNameTo: "space 1", CreatedBy: "Mr White"},
            {Id: 4, Number: 4, InventorySpaceNameFrom: "space 4", InventorySpaceNameTo: "space 1", CreatedBy: "Mr Black"},
            {Id: 5, Number: 5, InventorySpaceNameFrom: "space 5", InventorySpaceNameTo: "space 1", CreatedBy: "Mr Green"},
            {Id: 6, Number: 6, InventorySpaceNameFrom: "space 3", InventorySpaceNameTo: "space 1", CreatedBy: "Mr Grey"},
            {Id: 7, Number: 7, InventorySpaceNameFrom: "space 1", InventorySpaceNameTo: "space 1", CreatedBy: "Mr Black"},
            {Id: 8, Number: 8, InventorySpaceNameFrom: "space 3", InventorySpaceNameTo: "space 1", CreatedBy: "Mr White"},
            {Id: 9, Number: 9, InventorySpaceNameFrom: "space 4", InventorySpaceNameTo: "space 1", CreatedBy: "Mr Black"},
            {Id: 10, Number: 10, InventorySpaceNameFrom: "space 5", InventorySpaceNameTo: "space 1", CreatedBy: "Mr Green"},
            {Id: 11, Number: 11, InventorySpaceNameFrom: "space 3", InventorySpaceNameTo: "space 1", CreatedBy: "Mr Grey"}
            ];
        this.setState({dataOptions: data, dataLoading: false});
    }

    addAct() {
        var win = window.open("/movingBody/add", '_blank');
        win.focus();
    }

    viewAct(id) {
        var win = window.open("/movingBody/view/" + id, '_blank');
        win.focus();
    }

    editAct(id) {
        var win = window.open("/movingBody/edit/" + id, '_blank');
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


                <Button hidden={this.state.dataLoading}> Add inventory act </Button>
                {
                    this.state.dataLoading ?
                        <p><em>dd</em></p>
                        : <BootstrapTable data={this.state.dataOptions} striped hover >
                            <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='Number' width='50' dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='InventorySpaceNameFrom' width='30%'>Откуда</TableHeaderColumn>
                            <TableHeaderColumn dataField='InventorySpaceNameTo' width='30%'>Куда</TableHeaderColumn>
                            <TableHeaderColumn dataField='CreatedBy'>PersonFromWarehouseId</TableHeaderColumn>

                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} width='135'
                                               dataAlign='center'>Buttons</TableHeaderColumn>
                        </BootstrapTable>
                }

            </div>
        );
    }
}