import useFetch from './useFetch';
import create from 'zustand';

const teamStore = create(set => ({
    team: null,
    setTeam: team => set({ team })
}));

export default function useRT22Team() {
    const { team, setTeam } = teamStore();

    const { apiAsTeam } = useFetch();

    const fetchTeam = async () => {
        const res = await apiAsTeam('/rt22/team');
        const data = await res.json();
        setTeam(data);
        console.log(data);
    };

    return {
        team,
        fetchTeam
    };
}
