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
                text: "2019-01-09"
            },
            {  text: "2018-12-03"   },
            {  text: "2018-11-05"   },
            {  text: "2018-10-01"   },
            {  text: "2018-09-03"   },
            {  text: "2018-08-06"   },
            {  text: "2018-07-02"   },
            {  text: "2018-06-04"   },
            {  text: "2018-05-07"   },
            {  text: "2018-04-02"   },
            {  text: "2018-03-02"   },
            {  text: "2018-02-05"   },
            {  text: "2018-01-01"   },
            {  text: "2017-12-03"   },
            {  text: "2017-11-05"   },
            {  text: "2017-10-01"   },
            {  text: "2017-09-03"   },
            {  text: "2017-08-06"   },
            {  text: "2017-07-02"   }
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