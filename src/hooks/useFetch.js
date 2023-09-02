export default function useFetch() {
    //const apiBaseURL = "http://localhost:5000"
    const apiBaseURL = 'https://leaderboard.lugvitc.org';
    const apiURL = apiBaseURL+'/api';

    const api = (path, init) => fetch(apiURL + path, init);

    const apiPost = (path, object) =>
        api(path, {
            method: 'POST',
            headers: {
                ContentType: 'application/json'
            },
            body: JSON.stringify(object)
        });

    const apiAsTeam = async path => {
        const res = api(path, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                    'access-token'
                )}`
            }
        });
        const response = res.clone();
        if (res.status !== 401) {
            const data = await res.json();
            if (data && data.access_token)
                window.localStorage.setItem('access-token', data.access_token);
        } else {
            window.localStorage.setItem('access-token', '');
        }
        return response;
    };

    const apiPostAsTeam = async (path, object) => {
        const res = await api(path, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                    'access-token'
                )}`
            },
            body: JSON.stringify(object)
        });
        const response = res.clone();
        if (res.ok) {
            const data = await res.json();
            if (data && data.access_token)
                window.localStorage.setItem('access-token', data.access_token);
        } else {
            window.localStorage.setItem('access-token', '');
        }
        return response;
    };

    const apiPostGetJsonAsTeam = async (path, object) => {
        const res = await api(path, {
            method: object ? 'POST' : 'GET',
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                    'access-token'
                )}`
            },
            body: object ? JSON.stringify(object) : undefined
        });
        if (res.ok) {
            const data = await res.json();
            const ans = data;
            if (data && data.access_token) {
                window.localStorage.setItem('access-token', data.access_token);
                delete ans['access_token'];
            }
            return ans;
        } else {
            window.localStorage.setItem('access-token', '');
        }
    };

    return {
        apiBaseURL,
        apiURL,
        api,
        apiPost,
        apiAsTeam,
        apiPostAsTeam,
        apiPostGetJsonAsTeam
    };
}

