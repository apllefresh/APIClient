import React, {Component} from 'react';
import {Grid, Row, Col, FormGroup, ControlLabel, Panel} from 'react-bootstrap';
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";
import {ResortHeadTable} from "./ResortHeadTable";
import DatePicker from "react-datepicker";

export class ReSortHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectWarehouseId: [],
        };
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
    }

    updateWarehouseId = (value) => {
        this.setState({selectWarehouseId: value});
        console.log("warehouseID: " + value);
    };

    render() {

        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Акты пересорта</h1>
                <Row style={{height: '100%', padding: '10px 10px 10px 10px'}}>

                    <Col xs={6} md={4}>
                        <WarehouseDropDownList updateDate={this.updateWarehouseId}/>
                    </Col>
                    <Col md={2}>
                        <Panel>
                            <Panel.Heading>
                                Дата создания
                            </Panel.Heading>
                            <Panel.Body>
                                <Grid fluid>
                                    <Row>
                                        <Col>
                                            <ControlLabel>От</ControlLabel>
                                        </Col>
                                        <Col>
                                            <DatePicker value="01/01/2019"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <ControlLabel>До</ControlLabel>
                                        </Col>
                                        <Col>
                                            <DatePicker value="01/01/2019"/>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
                <Row style={{height: '100%'}}>
                    <ResortHeadTable/>
                </Row>
            </Grid>

        );
    }
}