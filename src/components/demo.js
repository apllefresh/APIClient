import * as SRD from "storm-react-diagrams";
import * as React from "react";
import {Component} from "react";
import 'storm-react-diagrams/dist/style.min.css';
// https://github.com/projectstorm/react-diagrams

export class Demo extends Component {
    constructor(props) {
        super(props);
        
        //1) setup the diagram engine
        var engine = new SRD.DiagramEngine();
        engine.installDefaultFactories();

        //2) setup the diagram model
        var model = new SRD.DiagramModel();

        //3-A) create a default node
        var node1 = new SRD.DefaultNodeModel("Manager", "rgb(0,192,255)");
        let port1 = node1.addOutPort("Out");
        let port2 = node1.addInPort("IN");
        node1.setPosition(100, 100);

        //3-B) create another default node
        var node2 = new SRD.DefaultNodeModel("Head Manager", "rgb(0,192,255)");
        let port3 = node2.addOutPort("Out");
        let port4 = node2.addInPort("IN");
        let port41 = node2.addInPort("IN");
        node2.setPosition(400, 100);

        var node3 = new SRD.DefaultNodeModel("Commercial director", "rgb(0,192,255)");
        let port5 = node3.addOutPort("Out");
        let port6 = node3.addInPort("IN");
        node3.setPosition(700, 100);
        
        // link the ports
        let link1 = port1.link(port3);
        link1.addLabel("Accept");
        let link2 = port3.link(port5);
        link2.addLabel("Accept");
        let link3 = port5.link(port3);
        link3.addLabel("Decline");
        
        //4) add the models to the root graph
        model.addAll(node1, node2, node3, link1, link2, link3);

        //5) load model into engine
        engine.setDiagramModel(model);
        this.state = {
            engine_: engine
        };
    }
    
    render() {

       
        
        return (
       <div style={{BackgroundColor :"Black"}} >

        
        <SRD.DiagramWidget position='unset' className="srd-demo-canvas" diagramEngine={this.state.engine_}/>
       </div>
    )
    };
}