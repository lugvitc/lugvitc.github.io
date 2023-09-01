export default function ContentCommonQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label> Do you have prior experience in writing content for events, blogs and social media handles? If so, specify where you worked.</label>
                <textarea
                    rows='6'
                    onChange={handleChange('content1')}
                    value={values.content1}
                />
            </div>
            <div className='form-textarea'>
                <label>  How familiar are you with different content formats such as articles, social media posts. Do you have a preference or specialty? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('content2')}
                    value={values.content2}
                />
            </div>
            <div className='form-textarea'>
                <label>  Which type of content attracts the user's eyes in your opinion and why? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('content3')}
                    value={values.content3}
                />
            </div>
        </>
    )
}
