import React, {Component} from 'react';
import {Button, Modal, ButtonGroup, ButtonToolbar, Grid} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class InventoryHeadDeleteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            id: this.props.id
        };
        this.handleCloseModalDeleteDate = this.handleCloseModalDeleteDate.bind(this);
        console.log(this.props.show);
    }

    handleCloseModalDeleteDate() {
        this.setState({show: !this.state.show});
        console.log("delete headID =" + this.state.id);
    }

    render() {
        return (
            <Modal show={this.state.show}
                   onHide={this.handleCloseModalDeleteDate}
                   onChange={(e) => {
                       console.log(e);
                       this.props.updateData(e)
                   }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Inventory Act</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure?</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleCloseModalDeleteDate}>No</Button>
                    <Button className='btn btn-primary' onClick={this.handleCloseModalDeleteDate}>Sure</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}