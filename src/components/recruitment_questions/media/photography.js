export default function MediaPhotographyQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label> Do you have experience in photographing events? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_photo_1')}
                    value={values.media_photo_1}
                />
            </div>
            <div className='form-textarea'>
                <label> Which device do you primarily use for photography? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_photo_2')}
                    value={values.media_photo_2}
                />
            </div>
            <div className='form-textarea'>
                <label>How would you approach capturing good-quality photographs in challenging lighting conditions (say, MG auditorium)?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('media_photo_3')}
                    value={values.media_photo_3}
                />
            </div>
        </>
    )
}