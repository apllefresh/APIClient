import React, {Component} from 'react';
import {
    Grid,
    Row,
    Modal,
    Button,
    ButtonToolbar,
    ButtonGroup,
    Glyphicon
} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

export class RoleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataOptions: [],
            dataLoading: true,
            showModalDeleteHead: false,
        };
        this.handleShowModalDeleteHead = this.handleShowModalDeleteHead.bind(this);
        this.handleCloseModalDeleteHead = this.handleCloseModalDeleteHead.bind(this);
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
            {Id: 1, Name: "Менеджер"},
            {Id: 2, Name: "Руководитель"},
            {Id: 3, Name: "Комерческий директор"},
            {Id: 4, Name: "Администратор"}
        ];
        this.setState({dataOptions: data, dataLoading: false});
    }

    addAct() {
        var win = window.open("/Role/add", '_blank');
        win.focus();
    }

    viewAct(id) {
        var win = window.open("/Role/view/" + id, '_blank');
        win.focus();
    }

    editAct(id) {
        var win = window.open("/Role/edit/" + id, '_blank');
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
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Роли</h1>
                <p></p>
                <Row style={{ width:'500px'}}>
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


                    <div className="react-bs-table-tool-bar ">
                        <div className="row">

                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8">

                                <div className="btn-group btn-group-sm" role="group" hidden={this.state.dataLoading}>
                                    <button type="button" onClick={this.addAct} className="btn btn-info react-bs-table-add-btn ">
                                    <span>
                                        <i className="fa glyphicon glyphicon-plus fa-plus"> </i> 
                                        Добавить роль
                                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.dataLoading ?
                            <p><em>dd</em></p>
                            : <BootstrapTable  data={this.state.dataOptions}    >
                                <TableHeaderColumn dataField='Id' hidden isKey >ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='Name' headerAlign='center' >Имя</TableHeaderColumn>
                                <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} width='135'
                                                   dataAlign='center'>Действия</TableHeaderColumn>
                            </BootstrapTable>
                    }

                </Row>
            </Grid>

        );
    }
}