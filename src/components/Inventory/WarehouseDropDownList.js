import React, { Component } from 'react';
import Select from 'react-select'
import 'react-dropdown/style.css'

export class WarehouseDropDownList extends Component {
     constructor(props) {
        super(props);
        this.state = {
            Options: [], Loading: true, selectId: 0,
        };

        this.change = this.change.bind(this);
        }
        
         change = (v) => {
        this.setState({ selectId: v.value });
        }
         componentDidMount()
         {
             var data =[{label: 1,value: 1},{label: 2,value: 2},{label: 3,value: 3}];
               console.log(data);
               this.setState({Options: data,Loading: false});

         }
     
    render() {
       
        return (
             <div>
                {
                    this.state.Loading
                    ? <p><em>Loading dates...</em></p>
                        : <div>
                            <Select options={this.state.Options} onChange={(e) => { this.props.updateData(e.value)}} placeholder="Select warehouse" />
                        </div>
                }
            </div>
        );
    }
}