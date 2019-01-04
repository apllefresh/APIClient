import React from "react";
import {Checkbox} from "react-bootstrap";

export class InsertProductRequestModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autoBuyPriceRecalcMode: true,
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

    keyPress = (e) => {
        const {columns, onSave} = this.props;
        if (e.keyCode === 13) {
            fetch('http://localhost:10220/api/ProductSearchByEan/' + e.target.value)
                .then(response => response.json())
                .then(data => {
                        this.refs[columns[3].field].value = data;
                    }
                ).catch(er => {
                this.refs[columns[3].field].value = "";
            });
        }
    };

    changeautoBuyPriceRecalcMode = () => {
        this.setState({autoBuyPriceRecalcMode: !this.state.autoBuyPriceRecalcMode})
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
                    <h4 className='modal-title'>Добавление товара в заявку</h4>

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
                        <input disabled className="form-control editor edit-text" ref={columns[3].field} type='text'/>
                    </div>

                    <div className='form-group' key={columns[4].field}>
                        <label>{columns[4].name} : </label>
                        <input className="form-control editor edit-text"/>
                    </div>

                    <Checkbox title="Автоматический расчет цены продажи" checked={this.state.autoBuyPriceRecalcMode} onChange={this.changeautoBuyPriceRecalcMode}>
                        Автоматический расчет цены продажи
                    </Checkbox>

                    <div className='form-group'>
                        <label>Процент наценки : </label>
                        <input disabled={!this.state.autoBuyPriceRecalcMode} className="form-control editor edit-text"
                               type='text'/>
                    </div>
                    
                    <div className='form-group' key={columns[5].field}>
                        <label>{columns[5].name} : </label>
                        <input disabled={this.state.autoBuyPriceRecalcMode} className="form-control editor edit-text"
                               ref={columns[5].field} type='text'/>
                    </div>

                    <div className='form-group' key={columns[6].field}>
                        <label>{columns[6].name} : </label>
                        <input className="form-control editor edit-text" ref={columns[6].field} type='text'/>
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