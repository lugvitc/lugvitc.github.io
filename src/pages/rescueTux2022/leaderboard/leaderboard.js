import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import TerminalWindow from '../../../components/terminal/terminalWindow';
import useFetch from '../../../hooks/useFetch';
import LeaderboardCards from '../components/leaderboardCard/leaderboardCards';

export default function Leaderboard() {
    const [teams, setTeams] = useState(null);
    const { apiPostGetJsonAsTeam } = useFetch();

    useEffect(() => {
        const fetchTeams = async () => {
            const data = await apiPostGetJsonAsTeam('/rt22/teams');
            setTeams(data.teams);
            console.log(teams);
        };
        fetchTeams();
    }, []);

    return (
        <TerminalWindow title={'Rescue Tux Leaderboard'}>
            <button>
                <NavLink to='/rescue-tux/play'>Back</NavLink>
            </button>
            <br />
            {teams ? (
                teams.length > 0 ? (
                    <LeaderboardCards teams={teams} />
                ) : (
                    <>no teams have registered yet</>
                )
            ) : (
                <>loading...</>
            )}
        </TerminalWindow>
    );
}
