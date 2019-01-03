import React, {Component} from 'react';
import {Grid, Row, Col, FormGroup, ControlLabel, Panel, Button} from 'react-bootstrap';
import {WarehouseDropDownList} from "../../Inventory/WarehouseDropDownList";
import {AnnulmentHeadTable} from "./AnnulmentHeadTable";
import DatePicker from "react-date-picker";
import '../../../NavMenu.css';

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

                    <Col xs={6} md={4}>
                        <WarehouseDropDownList updateDate={this.updateWarehouseId}/>
                    </Col>
                    <Col md={3}>
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
                    <Button hidden={this.state.dataLoading} style={{padding: '10px 10px 10px 10px'}}>
                        Создать акт списания
                    </Button>
                </Row>
                <Row >
                    <AnnulmentHeadTable/>
                </Row>
            </Grid>

        );
    }
}