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
                    <div className="react-bs-table-tool-bar ">
                        <div className="row">

                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8">

                                <div className="btn-group btn-group-sm" role="group" hidden={this.state.dataLoading}>
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