export default function TechnicalCpQuestions({ handleChange, values }){
    return (
        <>
            <div className='form-textarea'>
                <label>How will you contribute to this department?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_cp_1')}
                    value={values.tech_cp_1}
                />
            </div>
            <div className='form-textarea'>
                <label>What programming language do you prefer?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_cp_2')}
                    value={values.tech_cp_2}
                />
            </div>
            <div className='form-textarea'>
                <label>Give the link to your profile of coding platforms you use.</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_cp_3')}
                    value={values.tech_cp_3}
                />
            </div>
            <div className='form-textarea'>
                <label>List your achievements in contests and coding hackathons.</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_cp_4')}
                    value={values.tech_cp_4}
                />
            </div>
            <div className='form-textarea'>
                <label>List the topics you hold command on.</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_cp_5')}
                    value={values.tech_cp_5}
                />
            </div>
        </>
    )
}