import React, {Component} from 'react';
import {Grid, Row, Col, ControlLabel, Panel, FormGroup} from 'react-bootstrap';
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";
import {AnnulmentHeadTable} from "./AnnulmentHeadTable";
import DatePicker from "react-datepicker";

export class AnnulmentHead extends Component {

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
                <h1>Акты списания</h1>
                <Row style={{height: '200px', padding: '10px 10px 10px 10px'}}>

                    <Col md={2}>
                        <WarehouseDropDownList updateDate={this.updateWarehouseId}/>
                    </Col>
                    <Col md={3}>
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
                <Row >
                    <AnnulmentHeadTable/>
                </Row>
            </Grid>

        );
    }
}