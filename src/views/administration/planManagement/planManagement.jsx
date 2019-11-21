import React from 'react'
import * as d3 from "d3";
import * as ReactDOM from "react-dom";
import MiniDrawer from "./components/leftNavBarComponent/leftNavBar";

function makeDraggable(comp: React.Component) {
    let translateX = 0;
    let translateY = 0;
    const handleDrag = d3.drag()
        .subject(function () {
            d3.select(this);
            return {x: translateX, y: translateY}
        })
        .on('drag', function () {
            const me = d3.select(this);
            translateX = d3.event.x;
            translateY = d3.event.y;

            if (translateY < 0)
                translateY = 0
            if (translateX < 0)
                translateX = 0
            const transform = `translate(${translateX}, ${translateY})`;

            me.attr('transform', transform);
        });
    const node = ReactDOM.findDOMNode(comp);
    handleDrag(d3.select(node));
}

class Group extends React.Component {
    componentDidMount() {
        makeDraggable(this);
    }

    render() {
        return <g {...this.props} />
    }
}

class Circle extends React.Component {
    componentDidMount() {
        //makeDraggable(this);
    }

    render() {
        return <circle {...this.props} />
    }
}

class Svg extends React.Component {
    componentDidMount() {
        //makeDraggable(this);
    }

    render() {
        return <svg {...this.props} />
    }
}

class Rect extends React.Component {
    componentDidMount() {
        //makeDraggable(this);
    }

    render() {
        return <rect {...this.props} />
    }
}

class Table4 extends React.Component {
    componentDidMount() {
        makeDraggable(this);
    }

    render() {
        return <g>
            <g>
                <rect fill="#fff" id="canvas_background" height="150" width="150" y="-1" x="-1"/>
                <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                    <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
                </g>
            </g>
            <g>
                <rect stroke="#000" id="svg_1" height="147.99999" width="148" y="1.05" x="1.5" strokeWidth="1.5"
                      fill="#fff"/>
                <ellipse stroke="#000" ry="35.5" rx="35.5" id="svg_2" cy="38.55" cx="38.29008" strokeWidth="1.5"
                         fill="#fff"/>
                <ellipse stroke="#000" ry="35.5" rx="35.5" id="svg_3" cy="38.55" cx="111.63856" strokeWidth="1.5"
                         fill="#fff"/>
                <ellipse stroke="#000" ry="35.5" rx="35.5" id="svg_4" cy="111.61161" cx="38.29008" strokeWidth="1.5"
                         fill="#fff"/>
                <ellipse stroke="#000" ry="35.5" rx="35.5" id="svg_5" cy="111.0925" cx="111.83258" strokeWidth="1.5"
                         fill="#fff"/>
            </g>
        </g>
    }
}

class PlanManagement extends React.Component {
    render() {
        return (
            <div>
                <MiniDrawer/>
                <div className={"planManagementContent"}>
                    <svg height={1500} width={1000}>
                        <Table4/>
                        <Table4/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default PlanManagement;