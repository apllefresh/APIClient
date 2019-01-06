import React, {Component} from 'react';
import {
    Col,
    Grid,
    Row,
    ListGroupItem,
    Button,
    ListGroup,
    Checkbox,
    ControlLabel, FormGroup, FormControl
} from "react-bootstrap";
import 'react-dropdown/style.css'


export class Role extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            actions: [
                {name: "Создание заявки"},
                {name: "Редактирование заявки"},
                {name: "Просмотр заявки"},
                {name: "Создание накладной"},
                {name: "Редактирование накладной"},
                {name: "Просмотр накладной"},
                {name: "Создание акта переоценки"},
                {name: "Редактирование акта переоценки"},
                {name: "Просмотр акта переоценки"},
                {name: "Создание акта пересорта"},
                {name: "Редактирование акта пересорта"},
                {name: "Просмотр акта пересорта"},
                {name: "Печать ценников"},
                {name: "Редактирование шаблонов ценников"},

                {name: "Просмотр реализации"},
            ],
        };
    }

    render() {
        return (
            <Grid fluid>
                <Row style={{height: '100px'}}>
                    <h1> Создание роли </h1>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup style={{width: '300px'}}>
                            <ControlLabel>Имя роли</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Введите имя"
                            />
                        </FormGroup>
                        <p></p>
                        <Button className="btn-success" onClick={this.addRect}>
                            Сохранить
                        </Button>
                    </Col>

                    <Col md={4}>
                        <ControlLabel>
                            Настройка прав доступа
                        </ControlLabel>
                        <p></p>
                        <ListGroup style={{height: '700px', overflowY: 'auto'}}>
                            {this.state.actions.map((act, i) => (
                                <ListGroupItem>
                                    <Checkbox checked={act.value} style={{display: 'inline-block'}}/>
                                    <ControlLabel> {act.name}
                                    </ControlLabel>
                                </ListGroupItem>
                            ))}
                        </ListGroup>

                    </Col>

                </Row>
            </Grid>
        );
    }
}