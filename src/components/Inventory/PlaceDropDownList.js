import React, { Component } from 'react';
import Select from 'react-select'
import 'react-dropdown/style.css'

export class PlaceDropDownList extends Component {
     constructor(props) {
        super(props);
        this.state = {
            Options: [], Loading: true, selectId: 0,
            WareHouseId : this.props.WareHouseId,
            AllOptions : []
             };

        this.change = this.change.bind(this);
        }
        
         change = (v) => {
        this.setState({ selectId: v.value });
        }
        
         componentDidMount()
         {
            var data = [{label: "place 1",value: 1, WareHouseId : 1},{label: "place 2",value: 2, WareHouseId : 1},
                         {label: "place 3",value: 3, WareHouseId : 2},{label: "place 4",value: 4, WareHouseId : 2}];
               this.setState({AllOptions: data,Loading: false});
         }
        
         componentWillReceiveProps(nextProps)
         {
             this.refs.Label.state.value = null;
              var data = [];
              for (var i = 0; i < this.state.AllOptions.length; i++) {
                  if (this.state.AllOptions[i].WareHouseId === nextProps.WareHouseId) 
                  {

                        data.push(this.state.AllOptions[i]);
                    }
                }
               this.setState({Options: data,Loading: false});
              return true;
         }
     
    render() {
       
        return (
             <div>
                {
                    this.state.Loading
                    ? <p><em>Loading dates...</em></p>
                        : <div>
                            <Select ref='Label' options={this.state.Options} onChange={(e) => { this.props.updateData(e.value)}} placeholder="Select place" />
                        </div>
                }
            </div>
        );
    }
}