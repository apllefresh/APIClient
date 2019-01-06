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
            {Id: 1, Number: 1, InventorySpaceNameFrom: "ШАЛАНДА П/Ф", InventorySpaceNameTo: "РАСПРОДАЖНЫЕ СТОЛЫ", CreatedBy: "Заикина Т. А."},
            {Id: 2, Number: 2, InventorySpaceNameFrom: "КОНТЕЙНЕР №20", InventorySpaceNameTo: "ЗАЛ: СТЕЛЛАЖ  С МЫЛОМ", CreatedBy: "Зельская Г. И."},
            {Id: 3, Number: 3, InventorySpaceNameFrom: "КАМЕРА №14", InventorySpaceNameTo: "ЗАЛ: СТЕЛЛАЖ С ГИГИЕНОЙ", CreatedBy: "Артюшина М. Г."},
            {Id: 4, Number: 4, InventorySpaceNameFrom: "ЗАЛ САХАР ВЕС,КРУПА ВЕС", InventorySpaceNameTo: "СКЛАД САХАР", CreatedBy: "Измайлова Е. А."},
            {Id: 5, Number: 5, InventorySpaceNameFrom: "ЗАЛ КОНФЕТЫ ВЕС", InventorySpaceNameTo: "СКЛАД КОНДИТЕРКА", CreatedBy: "Кожевникова Н. С."},
            {Id: 6, Number: 6, InventorySpaceNameFrom: "ЗАЛ ВОСТОЧКА", InventorySpaceNameTo: "СКЛАД КОНДИТЕРКА", CreatedBy: "Иванова Д. А."},
            {Id: 7, Number: 7, InventorySpaceNameFrom: "ЗАЛ СТОЙКА ШОКОЛАДА", InventorySpaceNameTo: "СКЛАД КОНДИТЕРКА", CreatedBy: "Тюрина Ю. Н."},
            {Id: 8, Number: 8, InventorySpaceNameFrom: "ЗАЛ СТЕЛЛАЖ МАСЛО РАСТ+МУКА ", InventorySpaceNameTo: "СКЛАД МАСЛО", CreatedBy: "Измайлова Е. А."},
            {Id: 9, Number: 9, InventorySpaceNameFrom: "ЗАЛ СТЕЛЛАЖ СУПЫ Б/П+СЕНСОИ", InventorySpaceNameTo: "СКЛАД №2", CreatedBy: "Артюшина М. Г."},
            {Id: 10, Number: 10, InventorySpaceNameFrom: "ЗАЛ СТЕЛЛАЖ КОНФЕТЫ КОРОБКИ ", InventorySpaceNameTo: "СКЛАД КОНДИТЕРКА", CreatedBy: "Кожевникова Н. С."},
            {Id: 11, Number: 11, InventorySpaceNameFrom: "ЗАЛ ПЕЧЕНЬЕ ШТ+СТОЙКИ", InventorySpaceNameTo: "СКЛАД КОНДИТЕРКА", CreatedBy: "Иванова Д. А."}
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
                        <Modal.Title>Удаление акта перемещения</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Удалить акт?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseModalDeleteHead}>Отмена</Button>
                        <Button className='btn btn-primary' onClick={this.handleCloseModalDeleteHead}>Удалить</Button>
                    </Modal.Footer>
                </Modal>


                <div className="react-bs-table-tool-bar ">
                    <div className="row">

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8">

                            <div className="btn-group btn-group-sm" role="group" hidden={this.state.dataLoading}>
                                <button type="button" className="btn btn-info react-bs-table-add-btn ">
                                    <span>
                                        <i className="fa glyphicon glyphicon-plus fa-plus"> </i> 
                                        Создать акт перемещения
                                    </span>
                                </button>
                                <button type="button" className="btn btn-success react-bs-table-csv-btn  hidden-print">
                                    <span>
                                        <i className="fa glyphicon glyphicon-export fa-download"></i>
                                        Экпорт в .xls
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.dataLoading ?
                        <p><em>dd</em></p>
                        : <BootstrapTable data={this.state.dataOptions} striped hover >
                            <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='Number' width='50' dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='InventorySpaceNameFrom'  headerAlign='center' width='30%'>Откуда</TableHeaderColumn>
                            <TableHeaderColumn dataField='InventorySpaceNameTo'  headerAlign='center' width='30%'>Куда</TableHeaderColumn>
                            <TableHeaderColumn dataField='CreatedBy' dataAlign='center'  width='200' headerAlign='center'>Создан</TableHeaderColumn>

                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} width='135'
                                               dataAlign='center'>Действия</TableHeaderColumn>
                        </BootstrapTable>
                }

            </div>
        );
    }
}