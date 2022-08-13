import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalWindow from '../../components/terminal/terminalWindow';
import useFetch from '../../hooks/useFetch';

export default function Login() {
    const [loginValues, setLoginValues] = useState({
        name: '',
        password: ''
    });

    const handleChange = input => e => {
        setLoginValues({ ...loginValues, [input]: e.target.value });
    };

    const navigate = useNavigate();
    const {apiPost} = useFetch();

    const submit = async e => {
        e.preventDefault();
        if (!loginValues.name || !loginValues.password) {
            alert('Please fill out all the fields');
        } else {
            const res = await apiPost('/rt22/team-login', loginValues);
            if (res.ok) {
                const data = await res.json()
                window.localStorage.setItem('access-token', data.access_token);
                navigate('/rescue-tux/play');
            } else {
                window.alert('There was an error');
            }
        }
    };

    return (
        <TerminalWindow
            title='Start the Competition'
            prompts={[
                { path: '~/rescue-tux', command: 'cd login' },
                { path: '~/rescue-tux/login', command: './start' }
            ]}
        >
            <h1> Login Page </h1>
            <form className='lug-form' onSubmit={submit}>
                <div className='form-start'> Login </div>

                <div className='form-field'>
                    <label> Group Name: </label>
                    <input
                        type='text'
                        maxLength='128'
                        onChange={handleChange('name')}
                        value={loginValues.name}
                    />
                </div>

                <div className='form-field'>
                    <label> Group Password: </label>
                    <input
                        type='password'
                        maxLength='16'
                        onChange={handleChange('password')}
                        value={loginValues.password}
                    />
                </div>

                <div className='form-end'>
                    <button type='submit' className='form-nav-button'>
                        Login
                    </button>
                </div>
            </form>
        </TerminalWindow>
    );
}

