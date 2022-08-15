import useFetch from './useFetch';
import create from 'zustand';

const teamStore = create(set => ({
    team: null,
    setTeam: team => set({ team })
}));

export default function useRT22Team() {
    const { team, setTeam } = teamStore();

    const { apiPostGetJsonAsTeam, apiAsTeam } = useFetch();

    const fetchTeam = async () => {
        const data = await apiPostGetJsonAsTeam('/rt22/team');
        setTeam(data);
    };

    const logoutTeam = () => {
        // apiAsTeam('/rt22/logout');
        window.localStorage.setItem('access-token', '');
        setTeam(null);
    };

    return {
        team,
        fetchTeam,
        logoutTeam
    };
}
