import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TerminalWindow from '../../../components/terminal/terminalWindow';
import useFetch from '../../../hooks/useFetch';

export default function TeamRegistration() {
    const [teamValues, setTeamValues] = useState({
        name: '',
        member1RegNo: '',
        member2RegNo: '',
        member3RegNo: '',
        password: ''
    });

    const navigate = useNavigate();
    const {apiPost} = useFetch();

    const submit = async e => {
        e.preventDefault();
        if (!teamValues.name || !teamValues.member1RegNo || !teamValues.password) {
            alert('Please fill out all the fields');
        } else {
            if (!teamValues.member2RegNo) delete teamValues['member2RegNo'];
            if (!teamValues.member3RegNo) delete teamValues['member3RegNo'];
            const res = await apiPost('/rt22/create-team', teamValues);
            if (res.ok) {
                window.alert(JSON.stringify(teamValues));
                navigate('/rescue-tux/login');
            }
        }
    };

    const handleChange = input => e => {
        setTeamValues({ ...teamValues, [input]: e.target.value });
    };

    return (
        <TerminalWindow
            title='Form your team'
            prompts={[
                { path: '~/rescue-tux', command: 'cd ./make-team' },
                { path: '~/rescue-tux/make-team', command: './make-team' }
            ]}
        >
            <form className='lug-form' onSubmit={submit}>
                <div className='form-start'> Create Team Here </div>

                <div className='form-field'>
                    <label> * Group Name: </label>
                    <input
                        type='text'
                        maxLength='128'
                        onChange={handleChange('name')}
                        value={teamValues.name}
                    />
                </div>

                <div className='form-field'>
                    <label> * Group Password: </label>
                    <input
                        type='password'
                        maxLength='16'
                        onChange={handleChange('password')}
                        value={teamValues.password}
                    />
                </div>

                <div className='form-field'>
                    <label> * Registration Number (Member 1): </label>
                    <input
                        type='text'
                        maxLength='9'
                        onChange={handleChange('member1RegNo')}
                        value={teamValues.member1RegNo}
                    />
                </div>

                <div className='form-field'>
                    <label> Registration Number (Member 2): </label>
                    <input
                        type='text'
                        maxLength='9'
                        onChange={handleChange('member2RegNo')}
                        value={teamValues.member2RegNo}
                    />
                </div>

                <div className='form-field'>
                    <label> Registration Number (Member 3): </label>
                    <input
                        type='text'
                        maxLength='9'
                        onChange={handleChange('member3RegNo')}
                        value={teamValues.member3RegNo}
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

