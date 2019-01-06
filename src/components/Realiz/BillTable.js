import React, {Component} from 'react';
import {Button, Glyphicon, ButtonGroup, ButtonToolbar, Modal} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class BillTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataOptions: [],
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
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:10:56",
                Operation: 'Открытие документа',
                Doc: 50904,
                Product: '',
                Count: '',
                Price: '',
                Sum: ''
            },
            {
                Id: 2,
                Number: 2,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:10:56",
                Operation: 'Продажа',
                Doc: 50904,
                Product: 'ВАФЛИ "СПАРТАК ТОП" СО ВКУСОМ АПЕЛЬСИНА',
                Count: '1.000',
                Price: '9.90',
                Sum: '9.90'
            },
            {
                Id: 3,
                Number: 3,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:10:57",
                Operation: 'Продажа',
                Doc: 50904,
                Product: 'ВАФЛИ "СПАРТАК ТОП" СО ВКУСОМ АПЕЛЬСИНА',
                Count: '1.000',
                Price: '9.90',
                Sum: '9.90'
            },
            {
                Id: 4,
                Number: 4,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:10:59",
                Operation: 'Продажа',
                Doc: 50904,
                Product: 'ВАФЛИ "СПАРТАК ТОП" СО ВКУСОМ АПЕЛЬСИНА',
                Count: '1.000',
                Price: '9.90',
                Sum: '9.90'
            },
            {
                Id: 5,
                Number: 5,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:11:01",
                Operation: 'Продажа',
                Doc: 50904,
                Product: 'ВАФЛИ "СПАРТАК ТОП" СО ВКУСОМ АПЕЛЬСИНА',
                Count: '1.000',
                Price: '9.90',
                Sum: '9.90'
            },
            {
                Id: 6,
                Number: 6,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:11:03",
                Operation: 'Продажа',
                Doc: 50904,
                Product: 'ВАФЛИ "СПАРТАК ТОП" СО ВКУСОМ АПЕЛЬСИНА',
                Count: '1.000',
                Price: '9.90',
                Sum: '9.90'
            },
            {
                Id: 7,
                Number: 7,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:11:06",
                Operation: 'Продажа',
                Doc: 50904,
                Product: 'КЕКС С  ЦУКАТАМИ КГ',
                Count: '0.588',
                Price: '129.90',
                Sum: '76.38'
            },
            {
                Id: 8,
                Number: 8,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:11:08",
                Operation: 'Продажа',
                Doc: 50904,
                Product: 'ПЕЧЕНЬЕ САХАРНОЕ "ТОПЛЕНОЕ МОЛОКО" КГ',
                Count: '0.794',
                Price: '49.90',
                Sum: '39.62'
            },
            {
                Id: 9,
                Number: 9,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:11:23",
                Operation: 'Продажа',
                Doc: 50904,
                Product: 'МЕШОК ПОЛИЭТИЛЕНОВЫЙ МАЛЫЙ ШТ',
                Count: '1.000',
                Price: '2.90',
                Sum: '2.90'
            },
            {
                Id: 10,
                Number: 10,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:12:53",
                Operation: 'Подитог',
                Doc: 50904,
                Product: '',
                Count: '',
                Price: '',
                Sum: '168.40'
            },
            {
                Id: 11,
                Number: 11,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:12:53",
                Operation: 'Закрытие документа',
                Doc: 50904,
                Product: '',
                Count: '',
                Price: '168.40',
                Sum: '168.40'
            },
            {
                Id: 12,
                Number: 12,
                Terminal: 10,
                Kassir: "Иванова Л",
                Date: "2017-09-03 15:13:56",
                Operation: 'Открытие документа',
                Doc: 50905,
                Product: '',
                Count: '',
                Price: '',
                Sum: ''
            },
            { Id: 11,Number: 11, Terminal: 10 },{ Id: 11,Number: 11, Terminal: 10 },{ Id: 11,Number: 11, Terminal: 10 },{ Id: 11,Number: 11, Terminal: 10 },{ Id: 11,Number: 11, Terminal: 10 },
            { Id: 11,Number: 11, Terminal: 10 },{ Id: 11,Number: 11, Terminal: 10 },{ Id: 11,Number: 11, Terminal: 10 },{ Id: 11,Number: 11, Terminal: 10 },{ Id: 11,Number: 11, Terminal: 10 }
        ];
        this.setState({dataOptions: data, dataLoading: false});
    }

    render() {
        return (
            <div>
                <div className="react-bs-table-tool-bar ">
                    <div className="row">
                        <button type="button"
                                className="btn btn-success react-bs-table-csv-btn pull-right hidden-print">
                                    <span>
                                        <i className="fa glyphicon glyphicon-export fa-download"></i>
                                        Экпорт в .xls
                                    </span>
                        </button>
                    </div>
                </div>
                <BootstrapTable data={this.state.dataOptions} striped hover fluid>
                    <TableHeaderColumn dataField='Id' isKey hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='Number' width='50' dataAlign='center'>#</TableHeaderColumn>
                    <TableHeaderColumn dataField='Terminal'
                                       width='80'
                                       headerAlign='center'
                                       dataAlign='center'>
                        Касса
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='Kassir'
                                       width='100'
                                       headerAlign='center'
                                       dataAlign='center'>
                        Кассир
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='Date'
                                       width='150'
                                       headerAlign='center'
                                       dataAlign='center'>
                        Время
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='Doc'
                                       width='100'
                                       headerAlign='center'
                                       dataAlign='center'>
                        Чек
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='Product'
                                       headerAlign='center'
                                       dataAlign='left'>
                        Продукт
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='Operation'
                                       width='200'
                                       headerAlign='center'
                                       dataAlign='center'>
                        Операция
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='Count'
                                       width='100'
                                       headerAlign='center'
                                       dataAlign='center'>
                        Количество
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='Price'
                                       width='100'
                                       headerAlign='center'
                                       dataAlign='center'>
                        Цена
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='Sum'
                                       width='100'
                                       headerAlign='center'
                                       dataAlign='center'>
                        Сумма
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}