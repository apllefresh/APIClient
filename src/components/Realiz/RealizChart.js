import React, {Component} from 'react';
import {Chart} from 'react-google-charts';
import {Grid, Row, Col, ControlLabel, FormGroup} from 'react-bootstrap';
import {RealizChartTable} from "./RealizChartTable";
import DatePicker from "react-datepicker";

//https://react-google-charts.com/
export class RealizChart extends Component {

    render() {

        return (
            <Grid fluid>
                <h1>График реализации</h1>
                <p></p>
                <Row>
                    <Col sm={7}>
                        <FormGroup style={{width: '300px'}}>
                            <Col>
                                <ControlLabel style={{paddingRight:'10px'}}>Дата</ControlLabel>
                                <DatePicker value="01/01/2019"/>
                            </Col>
                        </FormGroup>
                        <div style={{display: 'flex', maxWidth: 900}}>

                            <Chart
                                width={900}
                                height={'700px'}
                                chartType="AreaChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Время', 'Сегодня', 'Вчера', 'Неделю назад'],
                                    ['08:00', 280.00, 65.00, 0.00],
                                    ['09:00', 292983.25, 299057.43, 300640.64],
                                    ['10:00', 829287.96, 861281.05, 824395.31],
                                    ['11:00', 1466024.49, 1446414.41, 1497133.48],
                                    ['12:00', 2317374.69, 2212771.25, 2332172.03],
                                    ['13:00', 3235313.91, 3115115.97, 3169266.69],
                                    ['14:00', 4093389.51, 4033410.64, 3949978.15],
                                    ['15:00', 5081124.70, 4932164.95, 4826828.04],
                                    ['16:00', 6079490.16, 5768358.12, 5731519.45],
                                    ['17:00', 7179962.52, 6607798.86, 6513856.52],
                                    ['18:00', 8413578.67, 7513995.52, 7409663.32],
                                    ['19:00', 9595384.87, 8422706.78, 8425230.80],
                                    ['20:00', 10467996.07, 9317439.36, 9327409.65],
                                    ['21:00', 11587579.63, 10219047.73, 10222265.85],
                                    ['22:00', 12541962.01, 11161909.22, 11145988.54]
                                ]}
                                options={{
                                    title: 'Company Performance',
                                   // hAxis: {title: 'Время', titleTextStyle: {color: '#333'}},
                                    vAxis: {minValue: 0},
                                    legend: { position: 'top', maxLines: 3 },
                                    // For the legend to fit, we make the chart area smaller
                                    chartArea: {width: '80%', height: '80%'},
                                    // lineWidth: 25
                                }}
                            />

                        </div>
                    </Col>
                    <Col sm={5}>
                        <RealizChartTable/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}