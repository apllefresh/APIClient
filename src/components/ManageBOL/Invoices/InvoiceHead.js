import React, {Component} from 'react';
import {Grid, Row, Col, FormGroup, ControlLabel, Panel, Button} from 'react-bootstrap';
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";
import DatePicker from "react-date-picker";
import {ShipperDropDownList} from "../../Product/ShipperDropDownList";
import {InvoiceHeadTable} from "./InvoiceHeadTable";

export class InvoiceHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectWarehouseId: [],
            selectShipperId: [],
        };
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
        this.updateShipperId = this.updateShipperId.bind(this);
    }

    updateWarehouseId = (value) => {
        this.setState({selectWarehouseId: value});
        console.log("warehouseID: " + value);
    };
    updateShipperId = (value) => {
        this.setState({selectShipperId: value});
        console.log("warehouseID: " + value);
    };

    render() {

        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Накладные</h1>
                <Row style={{height: '100%', padding: '10px 10px 10px 10px'}}>
                    <Col md={3}>
                        <ShipperDropDownList updateDate={this.updateShipperId}/>
                    </Col>
                    <Col md={3}>
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
                    <InvoiceHeadTable/>
                </Row>
            </Grid>

        );
    }
}