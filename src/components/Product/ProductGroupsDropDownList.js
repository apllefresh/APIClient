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
                label: 'МКО',
                value: 1,
                children: [
                    {
                        label: 'СВИНИНА П/Т ',
                        value: 2,
                        children: [
                            {
                                label: 'ПЕЛЬМЕНИ, ШТ           ',
                                value: 3
                            },
                            {
                                label: 'КАРТОФЕЛЬ-ФРИ, ШТ        ',
                                value: 31
                            },
                            {
                                label: 'ЗРАЗЫ, ШТ                ',
                                value: 32
                            },
                            {
                                label: 'ЗАМОРОЖ.ГРИБЫ, ШТ        ',
                                value: 33
                            },
                            {
                                label: 'БИФШТЕКСЫ, ШТ            ',
                                value: 34
                            },
                            {
                                label: 'КОТЛЕТЫ, ШТ              ',
                                value: 4
                            }
                        ]
                    }
                ]
            },
            {
                label: 'ГСТ',
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
                                                style={{width:'400px'}}
                                                placeholderText="Товарная группа" />
                        </div>
                }

            </div>
        );
    }
}