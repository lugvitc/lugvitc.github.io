export default function TechnicalFrontendQuestions({ handleChange, values }){
    return (
        <>
            <div className='form-textarea'>
                <label>Difference between link tag &lt;link&gt; and anchor tag &lt;a&gt;?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_frontend_1')}
                    value={values.tech_frontend_1}
                />
            </div>
            <div className='form-textarea'>
                <label> How do you specify units in the CSS? What are the different ways to do it?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_frontend_2')}
                    value={values.tech_frontend_2}
                />
            </div>
            <div className='form-textarea'>
                <label>How will you make a site responsive?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_frontend_3')}
                    value={values.tech_frontend_3}
                />
            </div>
            <div className='form-textarea'>
                <label>Have you worked with API , if yes tell where did you use it.</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_frontend_4')}
                    value={values.tech_frontend_4}
                />
            </div>
            <div className='form-textarea'>
                <label>What is Map function ?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_frontend_5')}
                    value={values.tech_frontend_5}
                />
            </div>
        </>
    )
}