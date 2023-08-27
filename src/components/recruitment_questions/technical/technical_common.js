export default function TechnicalCommonQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label>What are your field of interests? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech1')}
                    value={values.tech1}
                    placeholder='E.g. Cybersecurity, Web Development, App Development, AI etc.'
                />
            </div>
            <div className='form-textarea'>
                <label> What frameworks/tools are you comfortable with in your field of interest?  </label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech2')}
                    value={values.tech2}
                    placeholder='E.g. Metasploit, Kali Linux, ReactJS, NodeJS, Flask, Django, Flutter etc.'
                />
            </div>
            <div className='form-textarea'>
                <label> Give the link to your github or any place where your projects are hosted (if any) </label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech3')}
                    value={values.tech3}
                    placeholder='E.g. https://github.com/user'
                />
            </div>
        </>
    )
}