import React, {Component} from 'react';
import TreeView from 'treeview-react-bootstrap';
import {Grid, Row, Button, Panel, ListGroup, ListGroupItem} from "react-bootstrap";

//https://www.npmjs.com/package/treeview-react-bootstrap
export class Warehouses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

    }

    componentDidMount() {
        var data = [
            {
                text: "Зал",
                nodes: [
                    {
                        text: "Стелаж круп",
                        nodes: [
                            {
                                text: "Полка 1"
                            },
                            {
                                text: "Полка 2"
                            }
                        ]
                    },
                    {
                        text: "Стелаж соков",
                        nodes: [
                            {
                                text: "Полка 1"
                            },
                            {
                                text: "Полка 2"
                            }
                        ]
                    }
                ]
            },
            {
                text: "Склад",
                nodes: [
                    {
                        text: "Морозиьные камеры",
                        nodes: [
                            {
                                text: "Камера 1"
                            },
                            {
                                text: "Камера 2"
                            }
                        ]
                    },
                    {
                        text: "Склад муки",
                        nodes: [
                            {
                                text: "Полка 1"
                            },
                            {
                                text: "Полка 2"
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
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <Panel>
                    <h1>Склады </h1>
                    <ListGroup>
                        <ListGroupItem>
                            <Row style={{height: '70px', overflow: 'auto'}}>
                                <Button>Добавить склад</Button>
                                <Button>Добавить подсклад</Button>
                                <Button>Редактировать </Button>
                                <Button>Удалить </Button>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row style={{width: '90%', overflow: 'auto'}}>
                                <TreeView data={this.state.data}/>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
            </Grid>
        );
    }
}