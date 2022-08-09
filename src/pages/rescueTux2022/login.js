import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalWindow from '../../components/terminal/terminalWindow';

export default function Login() {
    const [loginValues, setLoginValues] = useState({
        groupName: '',
        password: ''
    });

    const handleChange = input => e => {
        setLoginValues({ ...loginValues, [input]: e.target.value });
    };

    const navigate = useNavigate();

    const submit = async e => {
        e.preventDefault();
        if (!loginValues.groupName || !loginValues.password) {
            alert('Please fill out all the fields');
        } else {
            // const res = await fetch(');
            // if (res.ok) {
            window.alert(`${loginValues.groupName} ${loginValues.password}`);
            navigate('/test-rt22/play');
            // } else {
            // window.alert('try again');
            // }
        }
    };

    return (
        <TerminalWindow
            title='Start the Competition'
            prompts={[
                { path: '~/rescue-tux', command: 'cd login' },
                { path: '~/test-rt22/login', command: './start' }
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
                        onChange={handleChange('groupName')}
                        value={loginValues.groupName}
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

