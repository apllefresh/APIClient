import React, {Component} from 'react';
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

// component from https://github.com/dowjones/react-dropdown-tree-select

export class ProductGroupsDropDownList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Options: [], Loading: true, selectIds: [],
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(currentNode, selectedNodes) {
        var selectedIDs = [];
        selectedNodes.forEach((node, i) => {
            selectedIDs.push(node.value);
        });
        this.setState({ selectIds: selectedIDs});
    };

    componentDidMount() {
        var data = [
            {
                label: 'Granddad 1',
                value: 1,
                children: [
                    {
                        label: 'dad 1',
                        value: 2,
                        children: [
                            {
                                label: 'son 1',
                                value: 3
                            },
                            {
                                label: 'son 2',
                                value: 4
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Granddad 2',
                value: 5,
                children: [
                    {
                        label: 'dad 2',
                        value: 6,
                        children: [
                            {
                                label: 'son 3',
                                value: 7
                            },
                            {
                                label: 'son 4',
                                value: 8
                            }
                        ]
                    }
                ]
            }
        ];

        this.setState({Options: data, Loading: false});

    }

    render() {

        return (
            <div>
                {
                    this.state.Loading
                        ? <p><em>Loading dates...</em></p>
                        : <div>
                            <DropdownTreeSelect data={this.state.Options}
                                                onChange={this.onChange}
                                                placeholderText="Select groups..." />
                        </div>
                }

            </div>
        );
    }
}