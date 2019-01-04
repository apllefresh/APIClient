import React, {Component} from 'react';
import {Button, Glyphicon, ButtonGroup, ButtonToolbar, Modal} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class RePriceHeadTable extends Component {
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
            {Id: 1, Number: 1, InventorySpaceName: "space 1", CreatedBy: "Mr Brown"},
            {Id: 2, Number: 2, InventorySpaceName: "space 2", CreatedBy: "Mr Grey"},
            {Id: 3, Number: 3, InventorySpaceName: "space 3", CreatedBy: "Mr White"},
            {Id: 4, Number: 4, InventorySpaceName: "space 4", CreatedBy: "Mr Black"},
            {Id: 5, Number: 5, InventorySpaceName: "space 5", CreatedBy: "Mr Green"},
            {Id: 6, Number: 6, InventorySpaceName: "space 3", CreatedBy: "Mr Grey"},
            {Id: 7, Number: 7, InventorySpaceName: "space 1", CreatedBy: "Mr Black"},
            {Id: 8, Number: 8, InventorySpaceName: "space 3", CreatedBy: "Mr White"},
            {Id: 9, Number: 9, InventorySpaceName: "space 4", CreatedBy: "Mr Black"},
            {Id: 10, Number: 10, InventorySpaceName: "space 5", CreatedBy: "Mr Green"},
            {Id: 11, Number: 11, InventorySpaceName: "space 3", CreatedBy: "Mr Grey"}];
        this.setState({dataOptions: data, dataLoading: false});
    }

    addAct() {
        var win = window.open("/repricebody/add", '_blank');
        win.focus();
    }

    viewAct(id) {
        var win = window.open("/repricebody/view/" + id, '_blank');
        win.focus();
    }

    editAct(id) {
        var win = window.open("/repricebody/edit/" + id, '_blank');
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


                <Button hidden={this.state.dataLoading} > Создать акт
                    пересорта </Button>
                {
                    this.state.dataLoading ?
                        <p><em>dd</em></p>
                        : <BootstrapTable data={this.state.dataOptions} striped hover fluid >
                            <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='Number' width='50' dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='InventorySpaceName'
                                               width='50%'>InventorySpaceId</TableHeaderColumn>
                            <TableHeaderColumn dataField='CreatedBy'>PersonFromWarehouseId</TableHeaderColumn>

                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} width='135'
                                               dataAlign='center'>Buttons</TableHeaderColumn>
                        </BootstrapTable>
                }

            </div>
        );
    }
}