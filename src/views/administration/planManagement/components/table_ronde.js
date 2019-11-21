import React from "react";

const TableRonde = ({addElement, id, rx, ry, cx, cy}) => {

    return <ellipse className="chaise" id="chaise_exemple" fillRule="evenodd" ry={ry || 36} rx={rx || 36}
                    cy={cy || 37} cx={cx || 37} strokeWidth=""
                    stroke="#000" fill="#fff" onClick={addElement}/>


}

export default TableRonde