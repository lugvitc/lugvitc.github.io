import LugNavLink from './lugLink/lugNavLink';

export default function PrevNextSessionLinks({
    prevIndex,
    prevSession,
    nextIndex,
    nextSession
}) {
    return (
        <div className='next-prev'>
            {prevIndex !== null && (
                <div className='prev'>
                    Prev:{' '}
                    <LugNavLink link={`/learn-linux?session=${prevIndex}`}>
                        {prevSession.title}
                    </LugNavLink>
                </div>
            )}
            {nextIndex !== null && (
                <div className='next'>
                    Next:{' '}
                    <LugNavLink link={`/learn-linux?session=${nextIndex}`}>
                        {nextSession.title}
                    </LugNavLink>
                </div>
            )}
        </div>
    );
}
