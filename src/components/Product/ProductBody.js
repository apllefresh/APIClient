import React, {Component} from 'react';
import { Grid, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {ProductBodyTable} from "./ProductBodyTable";
import {ProductBodyAttributeTable} from "./ProductBodyAttributeTable";

export class ProductBody extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: this.props.match.params.mode, id: this.props.match.params.id,
        };
    }



    render() {
        return (
            <Grid fluid style={{height: '850px', overflow: 'auto'}}>
                <h1>Информация о товаре </h1>
                <p></p>
               
                <Row style={{height: '300px', width: '100%'}}>
                    <ProductBodyTable />
                </Row>
                <p></p>
                <Row style={{height: '650px', width: '100%'}}>
                    <ProductBodyAttributeTable/>
                </Row>
            </Grid>

        );
    }
}