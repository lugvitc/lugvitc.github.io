import { NavLink } from 'react-router-dom';

export default function PrevNextSessionLinks({
    prevIndex,
    prevSession,
    nextIndex,
    nextSession
}) {
    console.log(prevIndex);
    console.log(prevSession);
    console.log(nextIndex);
    console.log(nextSession);
    return (
        <div className='next-prev'>
            {prevIndex !== null && (
                <div className='prev'>
                    {' '}
                    Prev:
                    <NavLink to={`/learn-linux?session=${prevIndex}`}>
                        {prevSession.title}
                    </NavLink>
                </div>
            )}
            {nextIndex !== null && (
                <div className='next'>
                    Next:
                    <NavLink to={`/learn-linux?session=${nextIndex}`}>
                        {nextSession.title}
                    </NavLink>
                </div>
            )}
        </div>
    );
}
