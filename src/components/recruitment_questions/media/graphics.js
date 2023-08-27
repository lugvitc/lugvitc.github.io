export default function MediaGraphicsQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label> Which platform or application do you primarily use for graphics design? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_graphic_1')}
                    value={values.media_graphic_1}
                />
            </div>
            <div className='form-textarea'>
                <label> What kind of designs do you specialize in? For example: material, minimalist, cyberpunk etc. </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_graphic_2')}
                    value={values.media_graphic_2}
                />
            </div>
            <div className='form-textarea'>
                <label> Do you feel that uniformity must be kept in mind while designing posts for social media? Should the designs always follow a specific color scheme/template, or should it always follow a design philosophy that isn’t necessarily about the color scheme? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_graphic_3')}
                    value={values.media_graphic_3}
                />
            </div>
        </>
    )
}