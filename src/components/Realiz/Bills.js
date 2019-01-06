import React, {Component} from 'react';
import {Grid, Row, Col, ControlLabel, FormGroup} from 'react-bootstrap';
import {KassirDropDownList} from "./KassirDropDownList";
import {TerminalDropDownList} from "./TerminalDropDownList";
import {OperationDropDownList} from "./OperationDropDownList";
import DatePicker from "react-datepicker";
import {BillTable} from "./BillTable";

export class Bills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectKassirId: 0,
            selectTerminalId: 0,
            selectOperationId: 0,
        };
        this.updateKassirId = this.updateKassirId.bind(this);
        this.updateTerminalId = this.updateTerminalId.bind(this);
        this.updateOperationlId = this.updateOperationlId.bind(this);
    }

    updateKassirId= (value) => {
        this.setState({selectKassirId: value});
    };
    updateTerminalId= (value) => {
        this.setState({selectTerminalId: value});
    };
    updateOperationlId= (value) => {
        this.setState({selectOperationId: value});
    };

    render() {

        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Просмотр чеков</h1>
                <p></p>
                <Row style={{height: '200px'}}>
                    <FormGroup style={{}}>
                        <Col sm={2}>
                            <ControlLabel style={{paddingRight: '10px'}}>
                                Кассир
                            </ControlLabel>
                            <KassirDropDownList updateData={this.updateKassirId}/>
                        </Col>
                        <Col sm={2}>
                            <ControlLabel style={{paddingRight: '10px'}}>
                                № кассы
                            </ControlLabel>
                            <TerminalDropDownList updateDat={this.updateTerminalId}/>
                        </Col>
                        <Col sm={2}>
                            <ControlLabel style={{paddingRight: '10px'}}>Операция</ControlLabel>
                            <OperationDropDownList updateDat={this.updateOperationlId}/>
                        </Col>
                        <ControlLabel style={{paddingRight: '10px'}}>
                            Время чека
                        </ControlLabel>
                        <Col>
                            
                            <ControlLabel style={{paddingRight: '10px'}}>
                                От
                            </ControlLabel>
                            <DatePicker value="01/01/2019"/>
                        </Col>
                        <Col>
                            <ControlLabel style={{paddingRight: '10px'}}>
                                До
                            </ControlLabel>
                            <DatePicker value="01/01/2019"/>
                        </Col>

                    </FormGroup>
                </Row>
                <Row style={{height: '100%'}}>
                    <BillTable/>
                </Row>
            </Grid>

        );
    }
}