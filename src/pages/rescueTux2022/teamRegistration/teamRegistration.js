import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TerminalWindow from '../../../components/terminal/terminalWindow';

export default function TeamRegistration() {
    const [teamValues, setTeamValues] = useState({
        gname: '',
        regno1: '',
        regno2: '',
        regno3: '',
        pwd: ''
    });

    const navigate = useNavigate();

    const submit = async e => {
        e.preventDefault();
        if (!teamValues.gname || !teamValues.regno1 || !teamValues.pwd) {
            alert('Please fill out all the fields');
        } else {
            //fetch
            window.alert(JSON.stringify(teamValues));
            navigate('/rescue-tux/login');
        }
    };

    const handleChange = input => e => {
        setTeamValues({ ...teamValues, [input]: e.target.value });
    };

    return (
        <TerminalWindow
            title='Form your team'
            prompts={[
                { path: '~/rescue-the-tux', command: 'cd ./team' },
                { path: '~/rescue-the-tux/team', command: 'crunch teams.txt' }
            ]}
        >
            <form className='lug-form' onSubmit={submit}>
                <div className='form-start'> Register here </div>

                <div className='form-field'>
                    <label> * Group Name: </label>
                    <input
                        type='text'
                        maxLength='128'
                        onChange={handleChange('gname')}
                        value={teamValues.gname}
                    />
                </div>

                <div className='form-field'>
                    <label> * Group Password: </label>
                    <input
                        type='password'
                        maxLength='16'
                        onChange={handleChange('pwd')}
                        value={teamValues.pwd}
                    />
                </div>

                <div className='form-field'>
                    <label> * Registration Number (Member 1): </label>
                    <input
                        type='text'
                        maxLength='9'
                        onChange={handleChange('regno1')}
                        value={teamValues.regno1}
                    />
                </div>

                <div className='form-field'>
                    <label> Registration Number (Member 2): </label>
                    <input
                        type='text'
                        maxLength='9'
                        onChange={handleChange('regno2')}
                        value={teamValues.regno2}
                    />
                </div>

                <div className='form-field'>
                    <label> Registration Number (Member 3): </label>
                    <input
                        type='text'
                        maxLength='9'
                        onChange={handleChange('regno3')}
                        value={teamValues.regno3}
                    />
                </div>

                <div className='form-end'>
                    <button type='submit' className='form-nav-button next'>
                        Create
                    </button>
                </div>
            </form>
        </TerminalWindow>
    );
}

