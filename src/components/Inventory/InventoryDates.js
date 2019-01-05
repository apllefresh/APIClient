import React, {Component} from 'react';
import TreeView from 'treeview-react-bootstrap';
import {Grid, Row, Col, Button, Panel, ListGroup, ListGroupItem} from "react-bootstrap";

//https://www.npmjs.com/package/treeview-react-bootstrap
export class InventoryDates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        var data = [
            {
                text: "2018-01-01"
            },
            {
                text: "2018-02-02"
            }
        ];
        this.setState({data: data});
    }

    render() {

        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <Panel>
                    <h1>Даты инвентаризации </h1>
                    <ListGroup>
                        <ListGroupItem>
                            <Row style={{height: '70px', overflow: 'auto'}}>
                                <Col md={4}>
                                    <Button>Создать</Button>
                                    <Button>Редактировать </Button>
                                    <Button>Удалить </Button>
                                </Col>
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