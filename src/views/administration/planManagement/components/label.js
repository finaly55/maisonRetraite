import {useState} from "react";
import React from "react";

const Label = ({center, adjustment, addElement}) => {
    const [dragging, setDragging] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [origin, setOrigin] = useState({ x: 0, y: 0 });

    // Add our new coordinates to the X and Y position values.
    const labelX = center[0] + adjustment[0] + coordinates.x;
    const labelY = center[1] + adjustment[1] + coordinates.y;

    return (
        <g
            style={{userSelect: 'none'}}
            transform={`translate(${labelX}, ${labelY})`}
            onMouseDown={e => {
                // Record our starting point.
                setOrigin({ x: e.clientX, y: e.clientY });
                setDragging(true);
            }}
            onMouseMove={e => {
                if (dragging) {
                    // Set state for the change in coordinates.
                    setCoordinates({
                        x: e.clientX - origin.x,
                        y: e.clientY - origin.y,
                    });
                }
            }}
            onMouseUp={() => {
                setDragging(false);
            }}
        >
            <rect className="table" id="table_exemple" onClick={addElement} height="43"
                  width="69" y="3.05" x="4.5"
                  strokeWidth="1.5" stroke="#000" fill="#fff"/>
        </g>
    );
};

export default Label