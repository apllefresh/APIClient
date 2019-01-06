import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button,  Col,  Grid,  Row} from "react-bootstrap";

export class ProductBodyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            data : [],
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
            {Id: 1, Property: "Штрихкод", Value: "1600000259768"},
            {Id: 2, Property: "Наименоание", Value: "ТОРТ \"МЕДОВИК\" 0.6ГР"},
            {Id: 3, Property: "Товарная группа", Value: "ТОРТЫ"},
            {Id: 4, Property: "Цена", Value: "338.90"}
        ];
        this.setState({data: data});
    }


    render() {

        return (
            <Grid fluid>

                <Row>
                    <Col md={12}>
                        <Button className="pull-right" bsStyle="success">
                            Сохранить
                        </Button>
                        <BootstrapTable data={this.state.data}  renderAlert={false}>
                            <TableHeaderColumn dataField='Id' hidden></TableHeaderColumn>
                            <TableHeaderColumn dataField='Property' width='150px' isKey={true} headerAlign='center'
                                               dataAlign='center'>Свойство</TableHeaderColumn>
                            <TableHeaderColumn dataField='Value' headerAlign='center'
                                               dataAlign='center'>Значение</TableHeaderColumn>

                        </BootstrapTable>
                    </Col>
                </Row>
            </Grid>
        );
    }
}