export default function MediaVideoQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label> Which software do you primarily use for video editing? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_video_1')}
                    value={values.media_video_1}
                />
            </div>
            <div className='form-textarea'>
                <label> How comfortable are you with the above-mentioned software? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_video_2')}
                    value={values.media_video_2}
                />
            </div>
            <div className='form-textarea'>
                <label> Which area of video editing (for example, colour grading) do you specialize in? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_video_3')}
                    value={values.media_video_3}
                />
            </div>
        </>
    )
}