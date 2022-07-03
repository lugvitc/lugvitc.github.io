import { useEffect, useState } from 'react';
import './tooltip.css';

export default function Tooltip({ toolRef, children, above, below }) {
    const [showToolTip, setShowToolTip] = useState(false);

    useEffect(() => {
        if (toolRef && toolRef.current) {
            const toolTipOpen = () => setShowToolTip(true);
            const toolTipClose = () => setShowToolTip(false);
            toolRef.current.addEventListener('mouseenter', toolTipOpen);
            toolRef.current.addEventListener('mouseleave', toolTipClose);

            return () => {
                if (toolRef && toolRef.current) {
                    toolRef.current.removeEventListener(
                        'mouseenter',
                        toolTipOpen
                    );
                    toolRef.current.removeEventListener(
                        'mouseleave',
                        toolTipClose
                    );
                }
            };
        }
    }, []);

    if (showToolTip && toolRef.current) {
        const leftVal = toolRef.current.offsetLeft;
        const topVal = toolRef.current.offsetTop;
        let tooltipStyle = {
            left: `calc(${leftVal}px - ${children.length / 2}em)`
        };

        if (above) {
            tooltipStyle.top = `calc(${topVal}px - 2em)`;
        } else if (below) {
            const bottomVal =
                toolRef.current.offsetTop + toolRef.current.clientHeight;
            tooltipStyle.top = `calc(${bottomVal}px + 0.5em)`;
        }
        return (
            <div className='tool-tip' style={tooltipStyle}>
                {children}
            </div>
        );
    } else return <></>;
}
