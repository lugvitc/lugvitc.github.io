import React from 'react';

export default function UpperDot(props) {
    return (
        <div
            style = {{
                backgroundColor: props.color,
                borderRadius: "10px",
                height: "10px",
                width: "10px",
            }}
        ></div>
    );
}