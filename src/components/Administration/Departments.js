import React, {Component} from 'react';
import TreeView from 'treeview-react-bootstrap';
import {Grid, Row, Button, Panel, ListGroup, ListGroupItem} from "react-bootstrap";

//https://www.npmjs.com/package/treeview-react-bootstrap
export class Departments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

    }

    componentDidMount() {
        var data = [
            { text: "МКО" },
            { text: "ГСТ" },
            { text: "БКО" },
            { text: "ОФК" },
            { text: "РКП" },
            { text: "ВВО" },
            { text: "ПВО" },
            { text: "КНД" },
            { text: "ОСТ" },
            { text: "СОП" },
            { text: "Эл. склад" }
        ];

        this.setState({data: data});

    }

    render() {

        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <Panel>
                    <h1>Отделы </h1>
                    <ListGroup>
                        <ListGroupItem>
                            <Row style={{height: '70px', overflow: 'auto'}}>
                                <Button>Добавить</Button>
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