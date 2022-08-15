import { useEffect } from 'react';
import TerminalWindow from '../../../components/terminal/terminalWindow';
import useRT22Team from '../../../hooks/useRT22Team';
import Login from '../login';

export default function LoggedInRoute({ children }) {
    const token = window.localStorage.getItem('access-token');
    const isPossibleValidToken = token && token.length > 0;
    const { team, fetchTeam, logoutTeam } = useRT22Team();

    useEffect(() => {
        const checkTeam = async () => {
            if (!isPossibleValidToken) logoutTeam();
            else if (!team) await fetchTeam();
        };
        checkTeam();
    }, [team]);

    if (!isPossibleValidToken) return <Login />;
    else if (!team) {
        return <TerminalWindow title='Login'>Logging you in...</TerminalWindow>;
    } else return children;
}

