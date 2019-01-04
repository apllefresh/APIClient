import React from "react";
import {Checkbox} from "react-bootstrap";

export class InsertShipperModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    };

    handleSaveBtnClick = () => {
        const {columns, onSave, onModalClose} = this.props;
        const newRow = {};
        columns.forEach((column, i) => {
            console.log(this.refs[column.field].value);
            newRow[column.field] = this.refs[column.field].value;
        }, this);
        // You should call onSave function and give the new row
        onSave(newRow);
        onModalClose();
    };



    render() {
        const {
            onModalClose,
            onSave,
            columns
        } = this.props;
        return (
            <div className='modal-content react-bs-table-insert-modal'>
                <div className='modal-header react-bs-table-inser-modal-header'>
                    <h4 className='modal-title'>Добавление поставщика</h4>

                </div>
                <div className='modal-body'>
                    <div className='form-group' key={columns[0].field}>
                        <input hidden ref={columns[0].field} type='text' defaultValue={0}/>
                    </div>
                    <div className='form-group' key={columns[1].field}>
                        <input hidden ref={columns[1].field} type='text' defaultValue={0}/>
                    </div>

                    <div className='form-group' key={columns[2].field}>
                        <label>{columns[2].name} : </label>
                        <input className="form-control editor edit-text" onKeyDown={this.keyPress}
                               onChange={this.handleChange} ref={columns[2].field} type='text' defaultValue={''}/>
                    </div>

                    <div className='form-group' key={columns[3].field}>
                        <label>{columns[3].name} : </label>
                        <input className="form-control editor edit-text" ref={columns[3].field} type='text'/>
                    </div>

                    <div className='form-group' key={columns[4].field}>
                        <label>{columns[4].name} : </label>
                        <input className="form-control editor edit-text"/>
                    </div>


                </div>
                <div className='modal-footer react-bs-table-inser-modal-footer'>
                    <button className='btn btn-default' onClick={onModalClose}>Отмена</button>
                    <button className='btn btn-primary'
                            onClick={() => this.handleSaveBtnClick(columns, onSave)}>Добавить
                    </button>
                </div>
            </div>
        );
    }
}