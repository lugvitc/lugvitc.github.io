export default function useFetch() {
    const apiURL = 'https://backmagic.herokuapp.com/api';
    // const apiURL = 'http://localhost:5000/api';

    const api = (path, init) => fetch(apiURL + path, init);

    const apiPost = (path, object) => api(path, {
        method: 'POST',
        headers: {
            ContentType: 'application/json'
        },
        body: JSON.stringify(object)
    })

    return {
        api,
        apiPost
    }
}