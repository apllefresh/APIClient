import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {ProductPrintTemplatesTable} from "./ProductPrintTemplatesTable";
import {ProductGroupsDropDownList} from "../Product/ProductGroupsDropDownList";

export class ProductPrintTemplates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectProductGroupId: [],
        };
        this.updateProductGroupId = this.updateProductGroupId.bind(this);
    }

    updateProductGroupId = (value) => {
        this.setState({selectProductGroupId: value});
        console.log("warehouseID: " + value);
    };

    render() {

        return (
            <Grid fluid style={{height: '100%', overflow: 'auto'}}>
                <h1>Товары</h1>
                <Row style={{height: '100%', padding: '10px 10px 10px 10px'}}>

                    <Col md={2}>
                        <ProductGroupsDropDownList updateDat={this.updateProductGroupId}/>
                    </Col>
                </Row>
                <Row style={{height: '100%'}}>
                    <ProductPrintTemplatesTable/>
                </Row>
            </Grid>

        );
    }
}