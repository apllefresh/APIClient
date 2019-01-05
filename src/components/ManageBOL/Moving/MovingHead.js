import React, {Component} from 'react';
import {Grid, Row, Col, ControlLabel, Panel} from 'react-bootstrap';
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";
import {MovingHeadTable} from "./MovingHeadTable";
import DatePicker from "react-datepicker";

export class MovingHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectWarehouseIdFrom: [],
            selectWarehouseIdTo: [],
        };
        this.updateWarehouseIdFrom = this.updateWarehouseIdFrom.bind(this);
        this.updateWarehouseIdTo = this.updateWarehouseIdTo.bind(this);
    }

    updateWarehouseIdFrom = (value) => {
        this.setState({selectWarehouseIdFrom: value});
        console.log("warehouseID: " + value);
    };
    updateWarehouseIdTo = (value) => {
        this.setState({selectWarehouseIdTo: value});
        console.log("warehouseID: " + value);
    };

    render() {

        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Акты перемещений продуктов</h1>
                <Row style={{height: '100%', padding: '10px 10px 10px 10px'}}>

                    <Col xs={6} md={4}>
                        <WarehouseDropDownList id='1' updateDate={this.updateWarehouseIdFrom}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <WarehouseDropDownList id='2' updateDate={this.updateWarehouseIdTo}/>
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
                    <MovingHeadTable/>
                </Row>
            </Grid>

        );
    }
}