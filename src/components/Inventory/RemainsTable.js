import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Col,  Grid,  Row} from "react-bootstrap";

export  class RemainsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }


    render() {
        const options = {
            insertModal: this.createCustomModal
        };
        return (
            <Grid fluid>

                <Row>
                    <Col md={10}>
                        <BootstrapTable  data={this.props.data} options={options} renderAlert={false} >
                            <TableHeaderColumn dataField='Id' hidden></TableHeaderColumn>
                            <TableHeaderColumn dataField='RowNumber' width='50' headerAlign='center' dataAlign='center' >#</TableHeaderColumn>
                            <TableHeaderColumn dataField='Ean' width='200' isKey={true}  headerAlign='center' dataAlign='center'>Штрихкод</TableHeaderColumn>
                            <TableHeaderColumn dataField='Name'  headerAlign='center'>Наименование</TableHeaderColumn>
                            <TableHeaderColumn dataField='Count' width='100' headerAlign='center' dataAlign='center'>Количество</TableHeaderColumn>
                        </BootstrapTable>
                    </Col>
                </Row>
            </Grid>
        );
    }
}