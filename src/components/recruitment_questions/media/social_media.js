export default function MediaSocialMediaQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label>What do you feel is important in making an organization's social media handles interactive and engaging? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_social_media_1')}
                    value={values.media_social_media_1}
                />
            </div>
            <div className='form-textarea'>
                <label> Do you feel that posting too frequently on an organization's social media handle can have an adverse effect on engagement? If so, what alternative would you suggest? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_social_media_2')}
                    value={values.media_social_media_2}
                />
            </div>
            <div className='form-textarea'>
                <label> Are quizzes a good way of engaging with the audience online? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_social_media_3')}
                    value={values.media_social_media_3}
                />
            </div>
        </>
    )
}