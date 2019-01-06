import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Col, Grid, Row} from "react-bootstrap";

export class ProductBodyAttributeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            data: [],
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
            {Id: 1, Property: "Нетто", Value: ""},
            {Id: 2, Property: "Состав", Value: ""},
            {Id: 3, Property: "БЖУ", Value: " "},
            {Id: 4, Property: "Дата изготовления", Value: " "},
            {Id: 5, Property: "Срок годности", Value: " "},
            {Id: 6, Property: "Производитель", Value: " "},
        ];
        this.setState({data: data});
    }


    render() {

        return (
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <BootstrapTable data={this.state.data} renderAlert={false}>
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