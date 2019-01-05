import React, {Component} from 'react';
import {Stage, Layer, Rect, Text, Transformer} from 'react-konva';
import {
    Col,
    Grid,
    Row,
    ListGroupItem,
    Button,
    ListGroup,
    Checkbox,
    ControlLabel
} from "react-bootstrap";
import Select from 'react-select'
import 'react-dropdown/style.css'


export class ProductPrintTemplateEditor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            rectangles: [
                {
                    x: 25,
                    y: 25,
                    width: 450,
                    height: 250,
                    name: 'rect1'
                },
                {
                    x: 25,
                    y: 300,
                    width: 450,
                    height: 75,
                    name: 'rect2'
                },
                {
                    x: 25,
                    y: 400,
                    width: 450,
                    height: 75,
                    name: 'rect3'
                }
            ],
            selectedShapeName: '',
            attributes: [
                {
                    name: "Цена",
                    value: true
                },
                {
                    name: "Наименование",
                    value: true
                },
                {
                    name: "Штрихкод",
                    value: true
                },
                {
                    name: "Нетто",
                    value: false
                }
            ],
            options: [
                {
                    label: "Стандарт 3х4",
                    value: "1"
                },
                {
                    label: "Большой 17х20",
                    value: "2"
                }
            ],
        };
        this.addRect = this.addRect.bind(this);

    }

    addRect() {
    }

    handleStageMouseDown = e => {
        // clicked on stage - cler selection
        if (e.target === e.target.getStage()) {
            this.setState({
                selectedShapeName: ''
            });
            return;
        }
        // clicked on transformer - do nothing
        const clickedOnTransformer =
            e.target.getParent().className === 'Transformer';
        if (clickedOnTransformer) {
            return;
        }

        // find clicked rect by its name
        const name = e.target.name();
        const rect = this.state.rectangles.find(r => r.name === name);
        if (rect) {
            this.setState({
                selectedShapeName: name
            });
        } else {
            this.setState({
                selectedShapeName: ''
            });
        }
    };

    render() {
        return (
            <Grid fluid>
                <h1> Редактирование ценника </h1>
                <Row>
                    <Col md={3}>
                        <ControlLabel>
                            Товарная группа: Кура -> Охлажденные
                        </ControlLabel>
                        <p></p>
                        <ControlLabel>
                            Выберете шаблон ценника
                        </ControlLabel>
                        <Select placeholder="Шаблон ценника" options={this.state.options}/>
                        <p></p>
                        <ListGroup>
                            {this.state.attributes.map((rect, i) => (
                                <ListGroupItem>
                                    <Checkbox checked={rect.value}/>
                                    <ControlLabel> {rect.name}
                                    </ControlLabel>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                        <p></p>
                        <Button className="btn-success" onClick={this.addRect}>
                            Сохранить
                        </Button>
                    </Col>
                    <Col md={9} id="EditorCol">

                        <Stage height={500} width={500} onMouseDown={this.handleStageMouseDown}
                               stroke="black"  style={{ margin: '50 50 50 50',   marginLeft: '300px', marginTop: '50px'}}
                              
                        >
                            <Layer style={{background: 'lightgrey'}}
                            
                            >
                                {this.state.rectangles.map((rect, i) => (
                                    <Rectangle key={i} {...rect} />
                                ))}
                                <Text draggable
                                      x={125}
                                      y={325}
                                      fontSize={38} text="Наименование"/>
                                <Text draggable
                                      x={200}
                                      y={130}
                                      fontSize={38} text="Цена"/>
                                <Text draggable
                                      x={175}
                                      y={420}
                                      fontSize={38} text="Штрихкод"/>
                                <TransformerComponent
                                    selectedShapeName={this.state.selectedShapeName}
                                />
                            </Layer>
                        </Stage>
                    </Col>
                </Row>
            </Grid>
        );
    }
}


class Rectangle extends React.Component {
    render() {
        return (
            <Rect
                x={this.props.x}
                y={this.props.y}
                width={this.props.width}
                height={this.props.height}
                name={this.props.name}
                stroke="black"
                draggable
            />
        );
    }
}

class TransformerComponent extends React.Component {
    componentDidMount() {
        this.checkNode();
    }

    componentDidUpdate() {
        this.checkNode();
    }

    checkNode() {
        // here we need to manually attach or detach Transformer node
        const stage = this.transformer.getStage();
        const {selectedShapeName} = this.props;

        const selectedNode = stage.findOne('.' + selectedShapeName);
        // do nothing if selected node is already attached
        if (selectedNode === this.transformer.node()) {
            return;
        }

        if (selectedNode) {
            // attach to another node
            this.transformer.attachTo(selectedNode);
        } else {
            // remove transformer
            this.transformer.detach();
        }
        this.transformer.getLayer().batchDraw();
    }

    render() {
        return (
            <Transformer
                ref={node => {
                    this.transformer = node;
                }}
            />
        );
    }
}