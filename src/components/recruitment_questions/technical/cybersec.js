export default function TechnicalCybersecQuestions({ handleChange, values }){
    return (
        <>
            <div className='form-textarea'>
                <label>What is xss?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_cybersec_1')}
                    value={values.tech_cybersec_1}
                />
            </div>
            <div className='form-textarea'>
                <label>What is proxy chains?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_cybersec_2')}
                    value={values.tech_cybersec_2}
                />
            </div>
            <div className='form-textarea'>
                <label>Differnce between hashing and encryption?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_cybersec_3')}
                    value={values.tech_cybersec_3}
                />
            </div>
            <div className='form-textarea'>
                <label>What are hid? What are it's potential attacks? How to protect?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_cybersec_4')}
                    value={values.tech_cybersec_4}
                />
            </div>
            <div className='form-textarea'>
                <label>What are handshakes and its types?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_cybersec_5')}
                    value={values.tech_cybersec_5}
                />
            </div>
        </>
    )
}