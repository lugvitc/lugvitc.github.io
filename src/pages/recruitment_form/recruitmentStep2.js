import TerminalWindow from '../../components/terminal/terminalWindow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import RecruitmentQuestions from '../../components/recruitment_questions/form';

export default function RecruitmentStepTwo({
    values,
    handleChange,
    nextStep,
    previousStep
}) {
    const next = e => {
        e.preventDefault();
        if (
            !values.whyLinux ||
            !values.expLinux ||
            !values.prefDept
        ) {
            alert('Please fill out all Fields');
        } else {
            nextStep();
        }
    };

    const back = e => {
        e.preventDefault();
        previousStep();
    };

    return (
        <TerminalWindow title='Step 2'>
            <form className='lug-form'>
                <div className='form-start'>Step 2 of 3</div>
                <div className='form-textarea'>
                    <label> Why do you want to join the Linux Club? </label>
                    <textarea
                        rows='6'
                        onChange={handleChange('whyLinux')}
                        value={values.whyLinux}
                    />
                </div>
                <div className='form-textarea'>
                    <label>
                        Have you ever used any Linux distro? Whats your
                        favourite distro?{' '}
                    </label>
                    <textarea
                        rows='6'
                        onChange={handleChange('expLinux')}
                        value={values.expLinux}
                    />
                </div>
                <div className='form-field longlabel'>
                    <label htmlFor='dept'>
                        Which department interests you the most in the Club?{' '}<br /><br />Department Preference 1
                    </label>
                    <select
                        name='dept'
                        id='dept'
                        value={values.prefDept}
                        onChange={handleChange('prefDept')}
                    >
                        <option value=' '>
                            Select a department
                        </option>
                        <option value='Technical Department'>
                            Technical Department
                        </option>
                        <option value='Technical Department - Frontend'>
                            Technical Department - Frontend
                        </option>
                        <option value='Technical Department - Backend'>
                            Technical Department - Backend
                        </option>
                        <option value='Technical Department - Cybersec'>
                            Technical Department - Cybersec
                        </option>
                        <option value='Technical Department - DevOps'>
                            Technical Department - DevOps
                        </option>
                        <option value='Technical Department - CP'>
                            Technical Department - CP
                        </option>
                        <option value='Management Department'>
                            Management Department
                        </option>
                        <option value='Operations Department'>
                            Operations Department
                        </option>
                        <option value='Media Department - Video'>
                            Media Department - Video
                        </option>
                        <option value='Media Department - Photography'>
                            Media Department - Photography
                        </option>
                        <option value='Media Department - Social Media Engagement'>
                            Media Department - Social Media Engagement
                        </option>
                        <option value='Media Department - Graphics Design'>
                            Media Department - Graphics Design
                        </option>
                        <option value='Content Department'>
                            Content Department
                        </option>
                    </select>
                </div>

                <RecruitmentQuestions values={values} prefDept={values.prefDept} handleChange={handleChange} />

                <div className='form-field longlabel'>
                    <label htmlFor='dept2'>
                        Department Preference 2{' '}
                    </label>
                    <select
                        name='dept2'
                        id='dept2'
                        value={values.prefDept2}
                        onChange={handleChange('prefDept2')}
                    >
                        <option value=' '>
                            Select a Department (Optional)
                        </option>
                        <option value='Technical Department'>
                            Technical Department
                        </option>
                        <option value='Technical Department - Frontend'>
                            Technical Department - Frontend
                        </option>
                        <option value='Technical Department - Backend'>
                            Technical Department - Backend
                        </option>
                        <option value='Technical Department - Cybersec'>
                            Technical Department - Cybersec
                        </option>
                        <option value='Technical Department - DevOps'>
                            Technical Department - DevOps
                        </option>
                        <option value='Technical Department - CP'>
                            Technical Department - CP
                        </option>
                        <option value='Management Department'>
                            Management Department
                        </option>
                        <option value='Operations Department'>
                            Operations Department
                        </option>
                        <option value='Media Department - Video'>
                            Media Department - Video
                        </option>
                        <option value='Media Department - Photography'>
                            Media Department - Photography
                        </option>
                        <option value='Media Department - Social Media Engagement'>
                            Media Department - Social Media Engagement
                        </option>
                        <option value='Media Department - Graphics Design'>
                            Media Department - Graphics Design
                        </option>
                        <option value='Content Department'>
                            Content Department
                        </option>
                    </select>
                </div>

                <RecruitmentQuestions values={values} prefDept={values.prefDept2} handleChange={handleChange} />

                <div className='form-end'>
                    <button
                        type='submit'
                        onClick={back}
                        className='form-nav-button prev'
                    >
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </button>
                    <button
                        type='submit'
                        className='form-nav-button next'
                        onClick={next}
                    >
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </div>
            </form>
        </TerminalWindow>
    );
}

