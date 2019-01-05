import  {Component} from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem, Button, ControlLabel, ButtonGroup, Glyphicon} from 'react-bootstrap'
import Select from 'react-select'
import 'react-dropdown/style.css'
import '../../NavMenu.css';
import {
    DiagramEngine,
    DiagramModel,
    DefaultNodeModel,
    DiagramWidget,
} from "storm-react-diagrams";
import 'storm-react-diagrams/dist/style.min.css';
import * as React from "react";
import {RouteEditorTable} from "./RouteEditorTable";

export class RouteEditor extends Component {
    constructor(props) {
        super(props);

        var engine = new DiagramEngine();
        engine.installDefaultFactories();
        var model = new DiagramModel();

        var node1 = new DefaultNodeModel("Начальная точка", "rgb(192,255,0)");
        let port1 = node1.addOutPort("Out");
        node1.setPosition(20, 100);

        var node2 = new DefaultNodeModel("Менеджер", "rgb(0,192,255)");
        let port20 = node2.addInPort("In");
        let port21 = node2.addOutPort("Out");
        let port22 = node2.addInPort("In");
        let port23 = node2.addOutPort("Out");
        node2.setPosition(200, 100);

        var node3 = new DefaultNodeModel("Руководитель", "rgb(0,192,255)");
        let port30 = node3.addInPort("In");
        let port31 = node3.addOutPort("Out");
        let port32 = node3.addInPort("In");
        let port33 = node3.addOutPort("Out");
        node3.setPosition(425, 100);

        var node4 = new DefaultNodeModel("Ком. директор", "rgb(0,192,255)");
        let port40 = node4.addInPort("In");
        let port41 = node4.addOutPort("Out");
        let port42 = node4.addInPort("In");
        let port43 = node4.addOutPort("Out");
        node4.setPosition(700, 100);

        var node5 = new DefaultNodeModel("Конечня точка", "rgb(192,0,255)");
        let port5 = node5.addInPort("In");
        node5.setPosition(900, 100);

        let link1 = port1.link(port20);
        link1.addLabel("Черновик");

        let link2 = port21.link(port30);
        link2.addLabel("На рассмотрении у руководителя");

        let link3 = port31.link(port40);
        link3.addLabel("Подтвержден руководителем");

        let link4 = port41.link(port5);
        link4.addLabel("Подтвержден");

        let link5 = port33.link(port22);
        link5.addLabel("Возвращен менеджеру");

        let link6 = port43.link(port32);
        link6.addLabel("Возвращен руководителю");

        model.addAll(node1, node2,node3,node4,node5, link1, link2, link3,link4,link5,link6);

        engine.setDiagramModel(model);
        
        this.state = {
            statuses:[
                { name: "На рассмотрении у руководителя" },
                { name: "Подтвержден руководителем " },
                { name: "Подтвержден" },
                { name: "Возвращен менеджеру" },
                { name: "Возвращен руководителю" },
                { name: "Заявка подтверждена" }
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
            engine : engine,
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
                        <ListGroup>
                            <h4> Статусы</h4>
                            {this.state.statuses.map((rect, i) => (
                                <ListGroupItem style={{ width: '300px', display: 'inline-block'}}>
                                    <ControlLabel> {rect.name}
                                    </ControlLabel>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
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
                    </Col>
                    <Col sm={8}>
                        <Row style={{ height: '350px' }}>
                                <DiagramWidget className="srd-demo-canvas" diagramEngine={this.state.engine} />
                        </Row>
                        <Row>
                            <RouteEditorTable/>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}