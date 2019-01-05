import React, { Component } from 'react';
import Select from 'react-select'
import 'react-dropdown/style.css'

export class InventoryDateDropDownList extends Component {
     constructor(props) {
        super(props);
        this.state = {
            Options: [], Loading: true, selectId: 0,
        };
        }
        

         componentDidMount()
         {
             var data =[{label: "2018-01-01",value: 1},{label: "2018-02-02",value: 2},{label: "2018-03-03",value: 3}];
               this.setState({Options: data,Loading: false});

         }
     
    render() {
       
        return (
             <div>
                {
                    this.state.Loading
                    ? <p><em>Loading dates...</em></p>
                        : <div>
                            <Select options={this.state.Options} onChange={(e) => { this.props.updateData(e.value)}} placeholder="Выберите дату инвентаризации" />
                        </div>
                }
            </div>
        );
    }
}