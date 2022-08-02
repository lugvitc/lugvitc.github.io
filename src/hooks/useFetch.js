export default function useFetch() {
    const api = (input, init) => fetch('http://localhost:5000/api' + input, init);
    return {api}
}