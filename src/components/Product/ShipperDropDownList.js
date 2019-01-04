import React, {Component} from 'react';
import Select from 'react-select'
import 'react-dropdown/style.css'

export class ShipperDropDownList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Options: [], Loading: true, selectId: 0,
        };
    }


    componentDidMount() {
        var data = [
            {label: "Shipper 1", value: 1},
            {label: "Shipper 2", value: 2},
            {label: "Shipper 3", value: 3}];
        this.setState({Options: data, Loading: false});

    }

    render() {

        return (
            <div style={{ width : '300px' }}>
                {
                    this.state.Loading
                        ? <p><em>Loading dates...</em></p>
                        : <div>
                            <Select 
                                
                                options={this.state.Options} onChange={(e) => {
                                this.props.updateData(e.value)
                            }} placeholder="Выберете поставщика..."/>
                        </div>
                }
            </div>
        );
    }
}