import useFetch from './useFetch';
import create from 'zustand';

const teamStore = create(set => ({
    team: null,
    setTeam: team => set({ team })
}));

export default function useRT22Team() {
    const { team, setTeam } = teamStore();

    const { apiPostGetJsonAsTeam } = useFetch();

    const fetchTeam = async () => {
        const data = await apiPostGetJsonAsTeam('/rt22/team');
        setTeam(data);
        console.log(data);
    };

    return {
        team,
        fetchTeam
    };
}
