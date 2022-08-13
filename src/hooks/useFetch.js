export default function useFetch() {
    const apiURL = 'https://backmagic.herokuapp.com/api';
    // const apiURL = 'http://localhost:5000/api';

    const api = (path, init) => fetch(apiURL + path, init);

    const apiPost = (path, object) =>
        api(path, {
            method: 'POST',
            headers: {
                ContentType: 'application/json'
            },
            body: JSON.stringify(object)
        });

    const accessToken = window.localStorage.getItem('access-token');

    const apiAsTeam = path =>
        api(path, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

    const apiPostAsTeam = (path, object) =>
        api(path, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify(object)
        });

    return {
        api,
        apiPost,
        apiAsTeam,
        apiPostAsTeam
    };
}

