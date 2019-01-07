import React, {Component} from 'react';
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

// component from https://github.com/dowjones/react-dropdown-tree-select

export class WarehouseDropDownList extends Component {
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
                label: 'Зал',
                value: 1,
                children: [
                    {
                        label: 'Стелаж круп',
                        value: 2,
                        children: [
                            {
                                label: 'Полка 1',
                                value: 3
                            },
                            {
                                label: 'Полка 2',
                                value: 4
                            }
                        ]
                    },
                    {
                        label: 'Стелаж соков',
                        value: 2,
                        children: [
                            {
                                label: 'Полка 1',
                                value: 5
                            },
                            {
                                label: 'Полка 2',
                                value: 6
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Склад',
                value: 7,
                children: [
                    {
                        label: 'Морозиьные камеры',
                        value: 8,
                        children: [
                            {
                                label: 'Камера 1',
                                value: 9
                            },
                            {
                                label: 'Камера 1',
                                value: 10
                            }
                        ]
                    },
                    {
                        label: 'Склад муки',
                        value: 11,
                        children: [
                            {
                                label: 'Полка 1',
                                value: 12                            
                            },
                            {
                                label: 'Полка 2',
                                value: 13
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
            <div style={{ width : '300px' }}>
                {
                    this.state.Loading
                        ? <p><em>Loading dates...</em></p>
                        : <div>
                            <DropdownTreeSelect data={this.state.Options} 
                                                onChange={this.onChange}
                                                placeholderText="Выберите склад" />
                        </div>
                }

            </div>
        );
    }
}