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
            {Id: 1, Number: 1, Shipper: 'ООО "ТД Великолукский молочныйкомбинат"', InventorySpaceName: "ШАЛАНДА П/Ф", Sum: "1254.05", RequestId: 1},
            {Id: 2, Number: 2, Shipper: 'ООО ТД "ЛИБЕР"', InventorySpaceName: "ЗАЛ КАШИ Б/П", Sum: "1254.05", RequestId: 2},
            {Id: 3, Number: 3, Shipper: 'ООО "КлинВет-Нева"', InventorySpaceName: "ЗАЛ СТЕЛЛАЖ МАСЛО РАСТ+МУКА", Sum: "1254.05", RequestId: 3},
            {Id: 4, Number: 4, Shipper: 'ЧП Виноградова И.И', InventorySpaceName: "ЗАЛ СТОЙКА ШОКОЛАДА", Sum: "1254.05", RequestId: 4},
            {Id: 5, Number: 5, Shipper: 'ООО "Классик"', InventorySpaceName: "ЗАЛ СУХИЕ ТОРТЫ", Sum: "1254.05", RequestId: 5},
            {Id: 6, Number: 6, Shipper: 'ООО "Норд"', InventorySpaceName: "ЗАЛ ВОСТОЧКА", Sum: "1254.05", RequestId: 6},
            {Id: 7, Number: 7, Shipper: 'ООО "Трансплан"', InventorySpaceName: "ЗАЛ СТЕЛЛАЖ КОНФЕТЫ ШТ", Sum: "1254.05", RequestId: 7},
            {Id: 8, Number: 8, Shipper: 'ООО "Ивадо"', InventorySpaceName: "ЗАЛ КОНФЕТЫ ВЕС", Sum: "1254.05", RequestId: 8},
            {Id: 9, Number: 9, Shipper: 'ООО "Вега"', InventorySpaceName: "ЗАЛ ПЕЧЕНЬЕ ШТ+СТОЙКИ", Sum: "1254.05", RequestId: 9},
            {Id: 10, Number: 10, Shipper: 'ООО ТД "Самсон"', InventorySpaceName: "РАСПРОДАЖНЫЕ СТОЛЫ", Sum: "1254.05", RequestId: 10},
            {Id: 11, Number: 11, Shipper: 'ООО "Северная Звезда"', InventorySpaceName: "ЗАЛ: СТЕЛЛАЖ С ГИГИЕНОЙ", Sum: "1254.05", RequestId: 11}
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
                        <Modal.Title>Удаление акта возврата</Modal.Title>
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
                                        Создать акт возврата
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
                        : <BootstrapTable data={this.state.dataOptions} striped hover fluid >
                            <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='Number' width='50' dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='Shipper' width='30%'  headerAlign='center'>Поставщик</TableHeaderColumn>
                            <TableHeaderColumn dataField='InventorySpaceName'  headerAlign='center'
                                               width='30%'>Склад</TableHeaderColumn>
                            <TableHeaderColumn dataField='Sum'  headerAlign='center' dataAlign='center'
                                               width='150px'>Сумма</TableHeaderColumn>
                            <TableHeaderColumn dataField='RequestId'  headerAlign='center' dataAlign='center'
                                               width='100px'># Накладной</TableHeaderColumn>
                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} width='125' headerAlign='center'
                                               dataAlign='center'>Действия</TableHeaderColumn>
                        </BootstrapTable>
                }

            </div>
        );
    }
}