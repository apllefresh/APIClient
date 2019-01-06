import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class RealizChartTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataOptions: []
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
                {Time: "08:00", Day1: "280.00", Day2: "65.00", Day3: "0", Diff1: "215.00", Diff2: "280.00"},
                {
                    Time: "09:00",
                    Day1: "292 983.25",
                    Day2: "299 057.43",
                    Day3: "300 640.64",
                    Diff1: "-6 074.18",
                    Diff2: "-7 657.39"
                },
                {
                    Time: "10:00",
                    Day1: "829 287.96",
                    Day2: "861 281.05",
                    Day3: "824 395.31",
                    Diff1: "-31 993.09",
                    Diff2: "4 892.65"
                },
                {
                    Time: "11:00",
                    Day1: "1 466 024.49",
                    Day2: "1 446 414.41",
                    Day3: "1 497 133.48",
                    Diff1: "19 610.08",
                    Diff2: "-31 108.99"
                },
                {
                    Time: "12:00",
                    Day1: "2 317 374.69",
                    Day2: "2 212 771.25",
                    Day3: "2 332 172.03",
                    Diff1: "104 603.44",
                    Diff2: "-14 797.34"
                },
                {
                    Time: "13:00",
                    Day1: "3 235 313.91",
                    Day2: "3 115 115.97",
                    Day3: "3 169 266.69",
                    Diff1: "120 197.94",
                    Diff2: "66 047.22"
                },
                {
                    Time: "14:00",
                    Day1: "4 093 389.51",
                    Day2: "4 033 410.64",
                    Day3: "3 949 978.15",
                    Diff1: "59 978.87",
                    Diff2: "143 411.36"
                },
                {
                    Time: "15:00",
                    Day1: "5 081 124.70",
                    Day2: "4 932 164.95",
                    Day3: "4 826 828.04",
                    Diff1: "148 959.75",
                    Diff2: "254 296.66"
                },
                {
                    Time: "16:00",
                    Day1: "6 079 490.16",
                    Day2: "5 768 358.12",
                    Day3: "5 731 519.45",
                    Diff1: "311 132.04",
                    Diff2: "347 970.71"
                },
                {
                    Time: "17:00",
                    Day1: "7 179 962.52",
                    Day2: "6 607 798.86",
                    Day3: "6 513 856.52",
                    Diff1: "572 163.66",
                    Diff2: "666 106.00"
                },
                {
                    Time: "18:00",
                    Day1: "8 413 578.67",
                    Day2: "7 513 995.52",
                    Day3: "7 409 663.32",
                    Diff1: "899 583.15",
                    Diff2: "1 003 915.35"
                },
                {
                    Time: "19:00",
                    Day1: "9 595 384.87",
                    Day2: "8 422 706.78",
                    Day3: "8 425 230.80",
                    Diff1: "1 172 678.09",
                    Diff2: "1 170 154.07"
                },
                {
                    Time: "20:00",
                    Day1: "10 467 996.07",
                    Day2: "9 317 439.36",
                    Day3: "9 327 409.65",
                    Diff1: "1 150 556.71",
                    Diff2: "1 140 586.42"
                },
                {
                    Time: "21:00",
                    Day1: "11 587 579.63",
                    Day2: "10 219 047.73",
                    Day3: "10 222 265.85",
                    Diff1: "1 368 531.90",
                    Diff2: "1 365 313.78"
                },
                {
                    Time: "22:00",
                    Day1: "12 541 962.01",
                    Day2: "11 161 909.22",
                    Day3: "11 145 988.54",
                    Diff1: "1 380 052.79",
                    Diff2: "1 395 973.47"
                }
            ]
        ;
        this.setState({dataOptions: data, dataLoading: false});
    }

    render() {
        return (

            <BootstrapTable data={this.state.dataOptions} striped hover fluid>
                <TableHeaderColumn dataField='Time' isKey width='90' dataAlign='center'
                                   headerAlign='center'>Время</TableHeaderColumn>
                <TableHeaderColumn dataField='Day1' width='100' dataAlign='right' headerAlign='center'>Сегодня
                    (А)</TableHeaderColumn>
                <TableHeaderColumn dataField='Day2' width='100' dataAlign='right' headerAlign='center'>Вчера
                    (В)</TableHeaderColumn>
                <TableHeaderColumn dataField='Day3' width='100' dataAlign='right' headerAlign='center'>Неделю<br/> назад
                    (С)</TableHeaderColumn>
                <TableHeaderColumn dataField='Diff1' width='100' dataAlign='right'
                                   headerAlign='center'>Разница<br/> (А-В) </TableHeaderColumn>
                <TableHeaderColumn dataField='Diff2' width='100' dataAlign='right'
                                   headerAlign='center'>Разница<br/> (А-С) </TableHeaderColumn>
            </BootstrapTable>
        );
    }
}