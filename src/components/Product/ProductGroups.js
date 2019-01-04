import React, {Component} from 'react';
import TreeView from 'treeview-react-bootstrap';
import {Grid, Row, Col, Button, Panel, ListGroup, ListGroupItem} from "react-bootstrap";
import {ProductGroupAttributeTable} from "./ProductGroupAttributeTable";

//https://www.npmjs.com/package/treeview-react-bootstrap
export class ProductGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

    }

    componentDidMount() {
        var data = [
            {
                text: "МКО",
                nodes: [
                    {
                        text: "Куры",
                        nodes: [
                            {
                                text: "Охлажденные"
                            },
                            {
                                text: "Замороженные"
                            }
                        ]
                    },
                    {
                        text: "Мясо",
                        nodes: [
                            {
                                text: "Охлажденные"
                            },
                            {
                                text: "Замороженные"
                            }
                        ]
                    }
                ]
            },
            {
                text: "ОФК",
                nodes: [
                    {
                        text: "Овощи",
                        nodes: [
                            {
                                text: "Замороженные"
                            },
                            {
                                text: "Охлажденные"
                            }
                        ]
                    },
                    {
                        text: "Фрукты",
                        nodes: [
                            {
                                text: "Замороженные"
                            },
                            {
                                text: "Охлажденные"
                            }
                        ]
                    }
                ]
            }
        ];

        this.setState({data: data});

    }

    render() {

        return (
            <Grid fluid style={{height: '800px', overflow: 'auto'}}>
                <Panel>
                    <h1>Товарные группы </h1>
                    <Row >
                        <Col sm={4} >
                            <ListGroup >
                                <ListGroupItem>
                                    <Row style={{height: '70px', overflow: 'auto'}}>
                                        <Button>Добавить группу</Button>
                                        <Button>Добавить подгруппу</Button>
                                        <Button>Редактировать </Button>
                                        <Button>Удалить </Button>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem >
                                    <Row style={{width: '90%', overflow: 'auto'}}>
                                        <TreeView  data={this.state.data}/>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <ProductGroupAttributeTable/>
                        </Col>
                    </Row>
                </Panel>
            </Grid>
        );
    }
}