import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Col} from "react-bootstrap";

export class InventoryResultTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataOptions: [],
            dataLoading: true,
            id: 0
        };

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
            {
                Id: 1,
                Number: 1,
                ProductName: "МАЙОНЕЗ ПРОВАНС 67% 850Г ВД",
                PrevCount: 20,
                InvoiceCount: 10,
                AnnulmentCount: 1,
                SaleCount: 25,
                Count: 4,
                Sum: 200
            },
            {
                Id: 2,
                Number: 2,
                ProductName: "СЫРОК ГЛАЗИР ЗЕБРА С КАРАМ 50Г",
                PrevCount: 20,
                InvoiceCount: 10,
                AnnulmentCount: 1,
                SaleCount: 25,
                Count: 4,
                Sum: 200
            },
            {
                Id: 3,
                Number: 3,
                ProductName: "КОТЛЕТЫ СНЕЖНАЯ СТРАНА КЛАССИЧЕСКИЕ 450Г ",
                PrevCount: 20,
                InvoiceCount: 10,
                AnnulmentCount: 1,
                SaleCount: 25,
                Count: 4,
                Sum: 200
            },
            {
                Id: 4,
                Number: 4,
                ProductName: "ЧИПСЫ ЭСТРЕЛЛА УКРОП 90Г",
                PrevCount: 20,
                InvoiceCount: 10,
                AnnulmentCount: 1,
                SaleCount: 25,
                Count: 4,
                Sum: 200
            },
            {
                Id: 5,
                Number: 5,
                ProductName: "ЧУПА ЧУПС С ИГРУШК АВТО АНИМАТРИКС 13Г",
                PrevCount: 20,
                InvoiceCount: 10,
                AnnulmentCount: 1,
                SaleCount: 25,
                Count: 4,
                Sum: 200
            },
            {
                Id: 6,
                Number: 6,
                ProductName: "МЕД НАТУР 380Г ПРОМТОРГ",
                PrevCount: 20,
                InvoiceCount: 10,
                AnnulmentCount: 1,
                SaleCount: 25,
                Count: 4,
                Sum: 200
            },
            {
                Id: 7,
                Number: 7,
                ProductName: "ЧАЙ ТОТ САМЫЙ БАЙХОВЫЙ 1С 100Г",
                PrevCount: 20,
                InvoiceCount: 10,
                AnnulmentCount: 1,
                SaleCount: 25,
                Count: 4,
                Sum: 200
            },
            {
                Id: 8,
                Number: 8,
                ProductName: "ШОКОЛАД ДЕСЕРТ ОРЕХ ИЗЮМ 250Г",
                PrevCount: 20,
                InvoiceCount: 10,
                AnnulmentCount: 1,
                SaleCount: 25,
                Count: 4,
                Sum: 200
            },
            {
                Id: 9,
                Number: 9,
                ProductName: "СИГАРЕТЫ Л&М ЛАЙТ БЛОК",
                PrevCount: 20,
                InvoiceCount: 10,
                AnnulmentCount: 1,
                SaleCount: 25,
                Count: 4,
                Sum: 200
            },
            {
                Id: 10,
                Number: 10,
                ProductName: "РЯЖЕНКА 4% 0.5Л МОЛОКОЛАМСК",
                PrevCount: 20,
                InvoiceCount: 10,
                AnnulmentCount: 1,
                SaleCount: 25,
                Count: 4,
                Sum: 200
            }
        ];
        this.setState({dataOptions: data, dataLoading: false});
    }


    render() {


        return (
            <div>

                {
                    this.state.dataLoading ?
                        <p><em>dd</em></p>
                        :
                        <Col>
                            <div className="react-bs-table-tool-bar ">
                                <div className="row">

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8">

                                        <div className="btn-group btn-group-sm" role="group"
                                             hidden={this.state.dataLoading}>
                                            <button type="button"
                                                    className="btn btn-success react-bs-table-csv-btn  hidden-print">
                                    <span>
                                        <i className="fa glyphicon glyphicon-export fa-download"></i>
                                        Экпорт в .xls
                                    </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <BootstrapTable data={this.state.dataOptions} striped hover fluid>
                                <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='Number' width='50'
                                                   dataAlign='center'>#</TableHeaderColumn>
                                <TableHeaderColumn dataField='ProductName' headerAlign='center'
                                                   width='50%'>Наименование</TableHeaderColumn>
                                <TableHeaderColumn dataField='PrevCount' headerAlign='center' dataAlign='center'
                                                   width='100px'>Остаток</TableHeaderColumn>
                                <TableHeaderColumn dataField='InvoiceCount' headerAlign='center' dataAlign='center'
                                                   width='120px'>Поступление</TableHeaderColumn>
                                <TableHeaderColumn dataField='AnnulmentCount' headerAlign='center' dataAlign='center'
                                                   width='120px'>Списание</TableHeaderColumn>
                                <TableHeaderColumn dataField='SaleCount' headerAlign='center' dataAlign='center'
                                                   width='120px'>Продажи</TableHeaderColumn>
                                <TableHeaderColumn dataField='Count' headerAlign='center' dataAlign='center'
                                                   width='150px'>Итого количество</TableHeaderColumn>
                                <TableHeaderColumn dataField='Sum' headerAlign='center' dataAlign='center'
                                                   width='120px'>Итого сумма</TableHeaderColumn>

                            </BootstrapTable>
                        </Col>
                }

            </div>
        );
    }
}