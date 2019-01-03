import React, {Component} from 'react';
import {Button, Glyphicon, ButtonGroup, ButtonToolbar, Modal} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

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
            {Id: 1, Number: 1, ProductName: "Product 1", PrevCount: 20, InvoiceCount: 10, AnnulmentCount: 1, SaleCount: 25, Count : 4, Sum :200},
            {Id: 2, Number: 2, ProductName: "Product 2", PrevCount: 20, InvoiceCount: 10, AnnulmentCount: 1, SaleCount: 25, Count : 4, Sum :200},
            {Id: 3, Number: 3, ProductName: "Product 3", PrevCount: 20, InvoiceCount: 10, AnnulmentCount: 1, SaleCount: 25, Count : 4, Sum :200},
            {Id: 4, Number: 4, ProductName: "Product 4", PrevCount: 20, InvoiceCount: 10, AnnulmentCount: 1, SaleCount: 25, Count : 4, Sum :200},
            {Id: 5, Number: 5, ProductName: "Product 5", PrevCount: 20, InvoiceCount: 10, AnnulmentCount: 1, SaleCount: 25, Count : 4, Sum :200},
            {Id: 6, Number: 6, ProductName: "Product 6", PrevCount: 20, InvoiceCount: 10, AnnulmentCount: 1, SaleCount: 25, Count : 4, Sum :200},
            {Id: 7, Number: 7, ProductName: "Product 7", PrevCount: 20, InvoiceCount: 10, AnnulmentCount: 1, SaleCount: 25, Count : 4, Sum :200},
            {Id: 8, Number: 8, ProductName: "Product 8", PrevCount: 20, InvoiceCount: 10, AnnulmentCount: 1, SaleCount: 25, Count : 4, Sum :200},
            {Id: 9, Number: 9, ProductName: "Product 9", PrevCount: 20, InvoiceCount: 10, AnnulmentCount: 1, SaleCount: 25, Count : 4, Sum :200},
            {Id: 10, Number: 10, ProductName: "Product 10", PrevCount: 20, InvoiceCount: 10, AnnulmentCount: 1, SaleCount: 25, Count : 4, Sum :200}
        ];
        this.setState({dataOptions: data, dataLoading: false});
    }


    render() {


        return (
            <div>

                {
                    this.state.dataLoading ?
                        <p><em>dd</em></p>
                        : <BootstrapTable data={this.state.dataOptions} striped hover fluid  >
                            <TableHeaderColumn dataField='Id' isKey hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='Number' width='50' dataAlign='center'>#</TableHeaderColumn>
                            <TableHeaderColumn dataField='ProductName' width='50%'>Наименование</TableHeaderColumn>
                            <TableHeaderColumn dataField='PrevCount'  width='50%'>Остаток</TableHeaderColumn>
                            <TableHeaderColumn dataField='InvoiceCount' width='50%'>Поступление</TableHeaderColumn>
                            <TableHeaderColumn dataField='AnnulmentCount' width='50%'>Списание</TableHeaderColumn>
                            <TableHeaderColumn dataField='SaleCount' width='50%'>Продажи</TableHeaderColumn>
                            <TableHeaderColumn dataField='Count' width='50%'>Итого количество</TableHeaderColumn>
                            <TableHeaderColumn dataField='Sum' width='50%'>Итого сумма</TableHeaderColumn>

                        </BootstrapTable>
                }

            </div>
        );
    }
}