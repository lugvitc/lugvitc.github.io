import React from 'react';

export default function UpperDot({color}) {
    return (
        <div
            style = {{
                backgroundColor: color,
                borderRadius: "10px",
                height: "10px",
                width: "10px",
            }}
        ></div>
    );
}