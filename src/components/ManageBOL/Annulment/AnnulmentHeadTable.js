import React, {Component} from 'react';
import {Button, Glyphicon, ButtonGroup, ButtonToolbar, Modal, Col} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class AnnulmentHeadTable extends Component {
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
            {Id: 1, Number: 1, InventorySpaceName: "ШАЛАНДА П/Ф", CreatedBy: "Медведева А. А."},
            {Id: 2, Number: 2, InventorySpaceName: "КОНТЕЙНЕР №20", CreatedBy: "Артюшина М. Г."},
            {Id: 3, Number: 3, InventorySpaceName: "КАМЕРА №14", CreatedBy: "Тюрина Ю. Н."},
            {Id: 4, Number: 4, InventorySpaceName: "ЗАЛ САХАР ВЕС,КРУПА ВЕС", CreatedBy: "Белокрылова Е. А."},
            {Id: 5, Number: 5, InventorySpaceName: "ЗАЛ КАШИ Б/П", CreatedBy: "Кожевникова Н. С."},
            {Id: 6, Number: 6, InventorySpaceName: "ЗАЛ СТЕЛЛАЖ МАСЛО РАСТ+МУКА ", CreatedBy: "Зельская Г. И."},
            {Id: 7, Number: 7, InventorySpaceName: "ЗАЛ СТЕЛЛАЖ СУПЫ Б/П+СЕНСОИ", CreatedBy: "Иванова Е. К."},
            {Id: 8, Number: 8, InventorySpaceName: "ЗАЛ СТОЙКА ШОКОЛАДА", CreatedBy: "Левченкова Я. В."},
            {Id: 9, Number: 9, InventorySpaceName: "ЗАЛ СУХИЕ ТОРТЫ", CreatedBy: "Короташ И. В."},
            {Id: 10, Number: 10, InventorySpaceName: "ЗАЛ ВОСТОЧКА", CreatedBy: "Измайлова Е. А."},
            {Id: 11, Number: 11, InventorySpaceName: "ЗАЛ КОНФЕТЫ ВЕС", CreatedBy: "Бабко Т. А."},
            {
                Id: 12,
                Number: 12,
                InventorySpaceName: "ЗАЛ СТЕЛЛАЖ КОНФЕТЫ КОРОБКИ + АДМИНИСТРАТОРСКАЯ ПАКЕТЫ ",
                CreatedBy: "Иванова Д. А."
            },
            {Id: 13, Number: 13, InventorySpaceName: "ЗАЛ ПЕЧЕНЬЕ ШТ+СТОЙКИ", CreatedBy: "Кулаева А. А."},
            {Id: 14, Number: 14, InventorySpaceName: "ЗАЛ: СТЕЛЛАЖ С ГИГИЕНОЙ", CreatedBy: "Заикина Т. А."},
            {Id: 15, Number: 15, InventorySpaceName: "ЗАЛ: СТЕЛЛАЖ  С МЫЛОМ", CreatedBy: "Галлямов А. Ф."},
            {Id: 16, Number: 16, InventorySpaceName: "РАСПРОДАЖНЫЕ СТОЛЫ", CreatedBy: "Максимова Е. С."}
        ];
        this.setState({dataOptions: data, dataLoading: false});
    }

    addAct() {
        var win = window.open("/annulmentbody/add", '_blank');
        win.focus();
    }

    viewAct(id) {
        var win = window.open("/annulmentbody/view/" + id, '_blank');
        win.focus();
    }

    editAct(id) {
        var win = window.open("/annulmentbody/edit/" + id, '_blank');
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
                        <Modal.Title>Удаление акта списания</Modal.Title>
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
                                        Создать акт списания
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
                        :  <Col md={10}>
                            <BootstrapTable data={this.state.dataOptions} striped hover fluid>
                                <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='Number' width='50'
                                                   dataAlign='center'>#</TableHeaderColumn>
                                <TableHeaderColumn dataField='InventorySpaceName' headerAlign='center'>Склад</TableHeaderColumn>
                                <TableHeaderColumn dataField='CreatedBy' dataAlign='center' width='200' headerAlign='center'>Создан</TableHeaderColumn>

                                <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)}
                                                   width='135' headerAlign='center' dataAlign='center'>Действия</TableHeaderColumn>
                            </BootstrapTable>
                        </Col>
                }

            </div>
        );
    }
}