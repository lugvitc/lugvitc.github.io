import { useEffect } from 'react';
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

    if (team) return children;
    else return <Login />;
}
