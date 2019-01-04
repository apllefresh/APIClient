import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button, ButtonGroup, ButtonToolbar, Col, Glyphicon, Grid, Row} from "react-bootstrap";
import {InsertProductGroupAttributeModal} from "./InsertProductGroupAttributeModal";

export class ProductGroupAttributeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            data: [],
            showModalDeleteProduct: false,
        };
        this.handleCloseModalDeleteProduct = this.handleCloseModalDeleteProduct.bind(this);
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
            {Id: 1, Type: "Текстовое поле", Property: "Штрихкод", Value: "456124545"},
            {Id: 2, Type: "Число", Property: "Наименоание", Value: "Печенька"},
            {Id: 3, Type: "Справочник", Property: "Товарная группа", Value: "Кондитерские изделия"}
        ];
        this.setState({data: data});
    }

    createCustomModal = (onModalClose, onSave, columns) => {
        const attr = {
            onModalClose, onSave, columns
        };
        return (
            <InsertProductGroupAttributeModal  {...attr} />
        );
    };

    buttonFormatter(cell, row) {
        return (<ButtonToolbar>
            <ButtonGroup>
                <Button onClick={this.createCustomModal}>
                    <Glyphicon glyph="pencil"/>
                </Button>
                <Button onClick={() => this.setState({showModalDeleteProduct: true})}>
                    <Glyphicon glyph="trash"/>
                </Button>
            </ButtonGroup>
        </ButtonToolbar>);
    }

    handleCloseModalDeleteProduct() {
        this.setState({showModalDeleteProduct: false});
    }
    render() {
        const options = {
            insertModal: this.createCustomModal
        };
        return (
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <BootstrapTable data={this.state.data} renderAlert={false} insertRow options={options} >
                            <TableHeaderColumn dataField='Id' hidden></TableHeaderColumn>
                            <TableHeaderColumn dataField='Type' width='150px' headerAlign='center'
                                               dataAlign='center'>Тип значений</TableHeaderColumn>
                            <TableHeaderColumn dataField='Property' width='150px' isKey={true} headerAlign='center'
                                               dataAlign='center'>Свойство</TableHeaderColumn>
                            <TableHeaderColumn dataField='Value' headerAlign='center'
                                               dataAlign='center'>Значение</TableHeaderColumn>
                            <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)}
                                               width='100' dataAlign='center'>Действия</TableHeaderColumn>
                        </BootstrapTable>
                    </Col>
                </Row>
            </Grid>
        );
    }
}