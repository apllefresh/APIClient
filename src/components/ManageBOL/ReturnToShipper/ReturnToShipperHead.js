import React, {Component} from 'react';
import {Grid, Row, Col, ControlLabel, Panel, FormGroup} from 'react-bootstrap';
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ShipperDropDownList} from "../../Product/ShipperDropDownList";
import {ReturnToShipperHeadTable} from "./ReturnToShipperHeadTable";



export class ReturnToShipperHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectWarehouseId: [],
            selectShipperId: [],
            dateFrom: Date.now(),
            dateTo: Date.now(),
        };
        this.updateWarehouseId = this.updateWarehouseId.bind(this);
        this.updateShipperId = this.updateShipperId.bind(this);
        this.handleChangeDateFrom = this.handleChangeDateFrom.bind(this);
        this.handleChangeDateTo = this.handleChangeDateTo.bind(this);
    }

    updateWarehouseId = (value) => {
        this.setState({selectWarehouseId: value});
        console.log("warehouseID: " + value);
    };
    updateShipperId = (value) => {
        this.setState({selectShipperId: value});
        console.log("warehouseID: " + value);
    };
    handleChangeDateTo(date) {
        this.setState({
            dateTo: date
        });
    }
    handleChangeDateFrom(date) {
        this.setState({
            dateFrom: date
        });
    }

    render() {
   
        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Возврат поставщику</h1>
                <Row style={{height: '100%', padding: '10px 10px 10px 10px'}}>
                    <Col sm={3}>
                        <ShipperDropDownList updateDate={this.updateShipperId}/>
                    </Col>
                    <Col sm={2}>
                        <WarehouseDropDownList updateDate={this.updateWarehouseId}/>
                    </Col>

                    <Col sm={3}>
                        <Panel style={{width: '250px'}}>
                            <Panel.Heading>
                                Дата создания
                            </Panel.Heading>
                            <Panel.Body>
                                <Grid fluid>
                                    <Row>
                                        <FormGroup >
                                            <Col>
                                                <ControlLabel style={{paddingRight:'10px'}}>От</ControlLabel>
                                                <DatePicker value="01/01/2019"/>
                                            </Col>
                                            <Col>
                                                <ControlLabel style={{paddingRight:'10px'}}>До</ControlLabel>
                                                <DatePicker value="01/01/2019"/>
                                            </Col>
                                        </FormGroup>

                                    </Row>
                                </Grid>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
                <Row style={{height: '100%'}}>
                    <ReturnToShipperHeadTable/>
                </Row>
            </Grid>

        );
    }
}