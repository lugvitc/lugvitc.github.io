export default function TechnicalBackendQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label>What is ORM?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_backend_1')}
                    value={values.tech_backend_1}
                />
            </div>
            <div className='form-textarea'>
                <label> Tell us the role of a webserver</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_backend_2')}
                    value={values.tech_backend_2}
                />
            </div>
            <div className='form-textarea'>
                <label>Which frameworks would you use for backend and why?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_backend_3')}
                    value={values.tech_backend_3}
                />
            </div>
            <div className='form-textarea'>
                <label> Explain routing and need of input sanitization</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_backend_4')}
                    value={values.tech_backend_4}
                />
            </div>
            <div className='form-textarea'>
                <label>What will be your approach to make a real-time chat application API?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_backend_5')}
                    value={values.tech_backend_5}
                />
            </div>
        </>
    )
}