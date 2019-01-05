import  {Component} from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem, Button, ControlLabel, ButtonGroup, Glyphicon} from 'react-bootstrap'
import Select from 'react-select'
import 'react-dropdown/style.css'
import * as SRD from "storm-react-diagrams";
import 'storm-react-diagrams/dist/style.min.css';
import * as React from "react";

export class RouteEditor extends Component {
    constructor(props) {
        super(props);
       
        //1) setup the diagram engine
        var engine = new SRD.DiagramEngine();
        engine.installDefaultFactories();

        //2) setup the diagram model
        var model = new SRD.DiagramModel();

        //3-A) create a default node
        var node1 = new SRD.DefaultNodeModel("Manager", "rgb(0,192,255)");
        node1.setPosition(100, 100);

        //3-B) create another default node
        var node2 = new SRD.DefaultNodeModel("Head Manager", "rgb(0,192,255)");
        node2.setPosition(400, 100);
        

       
        //4) add the models to the root graph
        model.addAll(node1, node2);

        //5) load model into engine
        engine.setDiagramModel(model);
        
        this.state = {
            statuses:[
                { name: "Черновик " },
                { name: "На рассмотрении у руководителя" },
                { name: "Подтвержден руководителем " },
                { name: "Заявка подтверждена" }
            ],
            statusOptions: [
                {
                    label: "Начальный статус",
                    value: "1"
                },
                {
                    label: "Промежуточный статус",
                    value: "2"
                },
                {
                    label: "Конечный статус",
                    value: "3"
                }
            ],
            routeOptions: [
                {
                    label: "Заявка",
                    value: "1"
                },
                {
                    label: "Поступление",
                    value: "2"
                },
                {
                    label: "Акт инвентаризации",
                    value: "3"
                },
                {
                    label: "Акт списания",
                    value: "4"
                },
                {
                    label: "Акт перемещения",
                    value: "5"
                },
                {
                    label: "Акт переоценки",
                    value: "6"
                },
                {
                    label: "Акт возврата поставщику",
                    value: "7"
                }
            ],
            engine : [],
        };
    }

    componentDidMount() {
    }

    render() {

        return (
            <Grid fluid>
                <h1>Редактор маршрутов</h1>
                <p></p>
                <Row>
                    <Col sm={4}>
                        <Row>
                            <Select placeholder="Выбор маршрута" options={this.state.routeOptions}/>
                        </Row>
                        <p></p>
                        <ButtonGroup>
                            <Button>
                                <Glyphicon glyph="plus"/>
                            </Button>
                            <Button>
                                <Glyphicon glyph="pencil"/>
                            </Button>
                            <Button>
                                <Glyphicon glyph="trash"/>
                            </Button>
                        </ButtonGroup>
                        <p></p>
                        <ListGroup>
                            {this.state.statuses.map((rect, i) => (
                                <ListGroupItem style={{ width: '300px', display: 'inline-block'}}>
                                    <ControlLabel> {rect.name}
                                    </ControlLabel>
                                    <Select placeholder="назначение статуса" options={this.state.statusOptions}/>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Row>
                            <div style={{BackgroundColor :"Black"}} >
                                <SRD.DiagramWidget position='unset' className="srd-demo-canvas" diagramEngine={this.state.engine}/>
                            </div>
                        </Row>
                        <Row>
                            
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}